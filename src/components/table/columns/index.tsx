import { ResAssetsType } from '@/store/slice/assets/assetsType'
import { Column } from '..'
import { formatNumberValue } from '@/utils/formatNumber'

export const columnsListAssets: Column<ResAssetsType>[] = [
  {
    header: 'Name',
    key: 'name',
    width: '!min-w-[12rem]',
    renderCell(rowData) {
      return (
        <div className="flex items-center gap-12">
          <p className="text-cryptown-dark-grey font-bold">{rowData?.name}</p>
          <p className="text-cryptown-light-gray font-sans text-[1.8rem]">
            {rowData?.symbol}
          </p>
        </div>
      )
    },
  },
  {
    header: 'Price',
    key: 'sproce',
    width: '!min-w-[12rem]',
    renderCell(rowData) {
      return (
        <div className="flex items-center gap-32">
          {formatNumberValue(Number(rowData?.priceUsd))}
        </div>
      )
    },
  },
]
