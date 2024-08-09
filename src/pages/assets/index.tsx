import { Table } from '@/components/table'
import { useAssets } from './hoooks/useAssets'
import { columnsListAssets } from '@/components/table/columns'

export default function AssetsPage() {
  const { assets, loading, limit, offset } = useAssets()

  return (
    <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto p-32">
      <div className="scrollbar flex h-full overflow-y-auto">
        <Table
          data={assets}
          columns={columnsListAssets}
          loading={loading}
          currentPage={offset + 1}
          pageSize={limit}
          maxHeight="h-full"
          isNumber
        />
      </div>
    </div>
  )
}
