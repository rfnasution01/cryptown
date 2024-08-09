import { getRatesSlice, StateRatesType } from '@/store/reducer/setRates'
import { useGetRatesQuery } from '@/store/slice/rates/ratesAPI'
import { ResRatesType } from '@/store/slice/rates/ratesType'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const initialState = {
  id: 'united-states-dollar',
  symbol: 'USD',
  currencySymbol: '$',
  type: 'fiat',
  rateUsd: '1.0000000000000000',
}

export function useRates() {
  const getRates = useSelector(getRatesSlice)
  const savingRates = localStorage?.getItem('savingRates')

  const ratesJSON = savingRates ? JSON.parse(savingRates) : {}

  useEffect(() => {
    if (getRates) {
      setStateRates(getRates)
    }
  }, [getRates])

  const [stateRates, setStateRates] = useState<StateRatesType>(
    ratesJSON ?? getRates ?? initialState,
  )

  const [rates, setRates] = useState<ResRatesType[]>([])

  const { data: dataRates, isLoading, isFetching } = useGetRatesQuery()

  useEffect(() => {
    if (dataRates) {
      setRates(dataRates?.data)
    }
  }, [dataRates])

  const loading = isLoading || isFetching

  return {
    loading,
    rates,
    setStateRates,
    stateRates,
  }
}
