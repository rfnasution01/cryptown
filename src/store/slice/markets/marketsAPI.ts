import { api, Res } from '@/store/api'
import { ParamsMarketsType, ResMarketsType } from './marketsType'

export const MarketsEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getMarkets: builder.query<Res<ResMarketsType[]>, ParamsMarketsType>({
      query: ({
        baseId,
        assetId,
        quoteId,
        exchangeId,
        baseSymbol,
        quoteSymbol,
        limit,
        offset,
      }) => ({
        url: `markets`,
        method: 'GET',
        params: {
          baseId: baseId,
          assetId: assetId,
          quoteId: quoteId,
          exchangeId: exchangeId,
          baseSymbol: baseSymbol,
          quoteSymbol: quoteSymbol,
          limit: limit,
          offset: offset,
        },
      }),
    }),
  }),
})

export const { useGetMarketsQuery } = MarketsEndpoints
