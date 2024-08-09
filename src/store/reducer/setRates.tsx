import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type StateRatesType = {
  currencySymbol: string
  id: string
  rateUsd: string
  symbol: string
  type: string
}

const initialState: StateRatesType | null = null

const stateRatesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    setStateRates: (state, action: PayloadAction<StateRatesType | null>) => {
      const { id, symbol, currencySymbol, type, rateUsd } = action.payload
      state.currencySymbol = currencySymbol
      state.id = id
      state.rateUsd = rateUsd
      state.symbol = symbol
      state.type = type
    },
  },
})

export const { setStateRates } = stateRatesSlice.actions

export const getRatesSlice = (state: { stateRates: StateRatesType }) =>
  state.stateRates

export default stateRatesSlice.reducer
