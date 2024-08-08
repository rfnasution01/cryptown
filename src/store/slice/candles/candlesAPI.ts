import { api, Res } from '@/store/api'
import { ParamsCandlesType, ResCandlesType } from './candlesType'

export const CandlesEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getCandles: builder.query<Res<ResCandlesType[]>, ParamsCandlesType>({
      query: ({ baseId, quoteId, exchange, interval }) => ({
        url: `Candles`,
        method: 'GET',
        params: {
          baseId: baseId,
          quoteId: quoteId,
          exchange: exchange,
          interval: interval,
        },
      }),
    }),
  }),
})

export const { useGetCandlesQuery } = CandlesEndpoints
