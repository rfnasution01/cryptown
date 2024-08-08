import { api, Res } from '@/store/api'
import {
  ParamsAssetsDetailType,
  ParamsAssetsHistoryType,
  ParamsAssetsMarketType,
  ParamsAssetsType,
  ResAssetsHistoryType,
  ResAssetsMarketType,
  ResAssetsType,
} from './assetsType'

export const AssetsEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getAssets: builder.query<Res<ResAssetsType[]>, ParamsAssetsType>({
      query: ({ search, ids, offset, limit }) => ({
        url: `assets`,
        method: 'GET',
        params: {
          search: search,
          ids: ids,
          offset: offset,
          limit: limit,
        },
      }),
    }),
    getAssetsDetail: builder.query<Res<ResAssetsType>, ParamsAssetsDetailType>({
      query: ({ id }) => ({
        url: `assets/${id}`,
        method: 'GET',
      }),
    }),
    getAssetsHistory: builder.query<
      Res<ResAssetsHistoryType>,
      ParamsAssetsHistoryType
    >({
      query: ({ id, interval, start, end }) => ({
        url: `assets/${id}/history`,
        method: 'GET',
        params: {
          interval: interval,
          start: start,
          end: end,
        },
      }),
    }),
    getAssetsMarkets: builder.query<
      Res<ResAssetsMarketType[]>,
      ParamsAssetsMarketType
    >({
      query: ({ id, limit, offset }) => ({
        url: `assets/${id}/markets`,
        method: 'GET',
        params: {
          limit: limit,
          offset: offset,
        },
      }),
    }),
  }),
})

export const {
  useGetAssetsQuery,
  useGetAssetsDetailQuery,
  useGetAssetsHistoryQuery,
  useGetAssetsMarketsQuery,
} = AssetsEndpoints
