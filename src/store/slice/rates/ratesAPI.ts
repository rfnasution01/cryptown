import { api, Res } from '@/store/api'
import { ParamsRatesDetailType, ResRatesType } from './ratesType'

export const RatesEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getRates: builder.query<Res<ResRatesType[]>, void>({
      query: () => ({
        url: `rates`,
        method: 'GET',
      }),
    }),
    getRatesDetail: builder.query<Res<ResRatesType>, ParamsRatesDetailType>({
      query: ({ id }) => ({
        url: `rates/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetRatesQuery, useGetRatesDetailQuery } = RatesEndpoints
