import { ResAssetsType } from '@/store/slice/assets/assetsType'
import { Column } from '..'
import { ResExchangesType } from '@/store/slice/exchanges/exchangesType'
import clsx from 'clsx'
import { PriceLabel } from '@/components/price/priceLabel'
import { CircleAlert } from 'lucide-react'
import { MenubarInfo } from '@/components/menubars/menubarInfo'
import { formatTimeAgo } from '@/utils/formatTime'

export const columnsListAssets: Column<ResAssetsType>[] = [
  {
    header: 'Name',
    key: 'name',
    width: '!min-w-[12rem]',
    renderCell(rowData) {
      return (
        <div className="flex items-center gap-12">
          <p className="font-bold text-cryptown-dark-grey">{rowData?.name}</p>
          <p className="font-sans text-[1.8rem] text-cryptown-light-gray">
            {rowData?.symbol}
          </p>
        </div>
      )
    },
  },
  {
    header: 'Price',
    key: 'priceUsd',
    width: '!min-w-[12rem]',
    renderCell(rowData) {
      return <PriceLabel value={Number(rowData?.priceUsd)} />
    },
  },
]

export const columnsListExchanges: Column<ResExchangesType>[] = [
  {
    header: 'Name',
    key: 'name',
    width: '!min-w-[12rem]',
  },
  {
    header: '24Hr%',
    key: 'percentTotalVolume',
    width: '!min-w-[12rem]',
    renderCell(rowData) {
      return (
        <div className="flex">
          <div
            className={clsx(
              'flex items-center gap-32 rounded-2x border px-12 py-4 text-[1.8rem]',
              {
                'border-transparent bg-green-500 text-white':
                  Number(rowData?.percentTotalVolume) > 0,
                'border-transparent bg-red-500 text-white':
                  Number(rowData?.percentTotalVolume) < 0,
                'border-cryptown-deep-blue text-cryptown-deep-blue':
                  Number(rowData?.percentTotalVolume) === 0,
              },
            )}
          >
            {Number(rowData?.percentTotalVolume) > 0
              ? `+ ${Number(rowData?.percentTotalVolume).toFixed(2)}`
              : Number(rowData?.percentTotalVolume) < 0
                ? `- ${Number(rowData?.percentTotalVolume).toFixed(2)}`
                : Number(rowData?.percentTotalVolume).toFixed(2)}
          </div>
        </div>
      )
    },
  },
  {
    header: 'Volume 24Hr',
    key: 'sproce',
    width: '!min-w-[12rem]',
    renderCell(rowData) {
      return <PriceLabel value={Number(rowData?.volumeUsd)} />
    },
  },
  {
    header: 'Trading Pairs',
    key: 'tradingPairs',
    width: '!min-w-[12rem]',
  },
  {
    header: 'Status',
    key: 'updated',
    width: '!min-w-[12rem]',
    renderCell(rowData) {
      const now = Date.now()
      const secondsPast = (now - Number(rowData?.updated)) / 1000

      return (
        <MenubarInfo
          trigger={
            <span
              className={`${secondsPast < 86400 ? 'text-green-500' : secondsPast < 31622400 ? 'text-blue-300' : 'text-red-500'}`}
            >
              <CircleAlert size={16} />
            </span>
          }
          content={
            <div className="">
              Updated {formatTimeAgo(Number(rowData?.updated))}
            </div>
          }
        />
      )
    },
  },
]
