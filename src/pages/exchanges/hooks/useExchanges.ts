import { useGetExchangesQuery } from '@/store/slice/exchanges/exchangesAPI'
import { ResExchangesType } from '@/store/slice/exchanges/exchangesType'
import { useEffect, useState } from 'react'

export function useExchanges() {
  const [exchanges, setExchanges] = useState<ResExchangesType[]>([])

  const { data: dataExchanges, isLoading, isFetching } = useGetExchangesQuery()

  const [totalVolume, setTotalVolume] = useState<number>(0)
  const [totalPairs, setTotalPairs] = useState<number>(0)
  const [bnbDominance, setBnbDominance] = useState<number>(0)

  useEffect(() => {
    if (dataExchanges) {
      setExchanges(dataExchanges?.data)

      // Calculate the total volumeUSD
      const volume = dataExchanges?.data?.reduce(
        (acc, exchange) => Number(acc) + Number(exchange?.volumeUsd),
        0,
      )
      setTotalVolume(volume)

      // Calculate the total pairs
      const pairs = dataExchanges?.data?.reduce(
        (acc, exchange) => Number(acc) + Number(exchange?.tradingPairs),
        0,
      )
      setTotalPairs(pairs)

      const bnb = dataExchanges?.data?.find(
        (item) => item?.exchangeId === 'binance',
      )?.volumeUsd

      const bnbDom = (Number(bnb) / volume) * 100
      setBnbDominance(bnbDom)
    }
  }, [dataExchanges])

  const loading = isLoading || isFetching

  return {
    loading,
    exchanges,
    bnbDominance,
    totalPairs,
    totalVolume,
  }
}
