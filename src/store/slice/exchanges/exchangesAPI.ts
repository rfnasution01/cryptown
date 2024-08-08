import { api, Res } from '@/store/api'
import { ParamsExchangesDetailType, ResExchangesType } from './exchangesType'

export const ExchangesEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getExchanges: builder.query<Res<ResExchangesType[]>, void>({
      query: () => ({
        url: `exchanges`,
        method: 'GET',
      }),
    }),
    getExchangesDetail: builder.query<
      Res<ResExchangesType>,
      ParamsExchangesDetailType
    >({
      query: ({ id }) => ({
        url: `exchanges/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetExchangesQuery, useGetExchangesDetailQuery } =
  ExchangesEndpoints
