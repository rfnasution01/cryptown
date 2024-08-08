export type ResMarketsType = {
  exchangeId: string
  rank: string
  baseSymbol: string
  baseId: string
  quoteSymbol: string
  quoteId: string
  priceQuote: string
  priceUsd: string
  volumeUsd24Hr: string
  percentExchangeVolume: string
  tradesCount24Hr: string
  updated: number
}

export type ParamsMarketsType = {
  exchangeId?: string
  baseSymbol?: string
  quoteSymbol?: string
  baseId?: string
  quoteId?: string
  assetId?: string
  limit?: number
  offset?: number
}
