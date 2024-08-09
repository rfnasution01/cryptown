import { getRatesSlice, StateRatesType } from '@/store/reducer/setRates'
import { useGetRatesQuery } from '@/store/slice/rates/ratesAPI'
import { ResRatesType } from '@/store/slice/rates/ratesType'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function useRates() {
  const getRates = useSelector(getRatesSlice)

  const [stateRates, setStateRates] = useState<StateRatesType>(getRates)

  const [rates, setRates] = useState<ResRatesType[]>([])

  const { data: dataRates, isLoading, isFetching } = useGetRatesQuery()

  useEffect(() => {
    if (getRates) {
      setStateRates(getRates)
    }
  }, [getRates])

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
