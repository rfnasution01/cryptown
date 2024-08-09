import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import stateRates from './reducer/setRates'

export const store = configureStore({
  reducer: {
    stateRates: stateRates,
    [api.reducerPath]: api.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
