export type ResAssetsType = {
  id: string
  rank: string
  symbol: string
  name: string
  supply: string
  maxSupply: string
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
  vwap24Hr: string
  explorer: string
}

export type ParamsAssetsType = {
  search?: string
  ids?: string
  limit?: string
  offset?: string
}

export type ParamsAssetsDetailType = {
  id: string
}

export type ResAssetsHistoryType = {
  priceUsd: string
  time: number
  date: string
}

export type ParamsAssetsHistoryType = {
  id: string
  interval: string
  start?: number
  end?: number
}

export type ResAssetsMarketType = {
  exchangeId: string
  baseId: string
  quoteId: string
  baseSymbol: string
  quoteSymbol: string
  volumeUsd24Hr: string
  priceUsd: string
  volumePercent: string
}

export type ParamsAssetsMarketType = {
  id: string
  limit?: number
  offset?: number
}
