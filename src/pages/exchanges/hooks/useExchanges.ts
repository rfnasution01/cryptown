import { useGetExchangesQuery } from '@/store/slice/exchanges/exchangesAPI'
import { ResExchangesType } from '@/store/slice/exchanges/exchangesType'
import { useEffect, useState } from 'react'

export function useExchanges() {
  const [exchanges, setExchanges] = useState<ResExchangesType[]>([])

  const { data: dataExchanges, isLoading, isFetching } = useGetExchangesQuery()

  useEffect(() => {
    if (dataExchanges) {
      setExchanges(dataExchanges?.data)
    }
  }, [dataExchanges])

  const loading = isLoading || isFetching

  return {
    loading,
    exchanges,
  }
}
