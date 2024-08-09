import { useGetAssetsQuery } from '@/store/slice/assets/assetsAPI'
import { ResAssetsType } from '@/store/slice/assets/assetsType'
import { useEffect, useState } from 'react'

export function useAssets() {
  const [search, setSearch] = useState<string>('')
  const [limit, setLimit] = useState<number>(100)
  const [offset, setOffset] = useState<number>(0)

  const [assets, setAssets] = useState<ResAssetsType[]>([])

  const {
    data: dataAssets,
    isLoading,
    isFetching,
  } = useGetAssetsQuery({
    search: search ?? '',
    limit: limit,
    offset: offset,
  })

  useEffect(() => {
    if (dataAssets) {
      setAssets(dataAssets?.data)
    }
  }, [dataAssets])

  const loading = isLoading || isFetching

  return {
    loading,
    assets,
    setSearch,
    setLimit,
    setOffset,
    offset,
    limit,
    search,
  }
}
