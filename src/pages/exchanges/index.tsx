import { Table } from '@/components/table'
import { useExchanges } from './hooks/useExchanges'
import { columnsListExchanges } from '@/components/table/columns'

export default function ExchangesPage() {
  const { exchanges, loading } = useExchanges()

  return (
    <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto p-32">
      <div className="scrollbar flex h-full flex-1 overflow-y-auto">
        <Table
          data={exchanges}
          columns={columnsListExchanges}
          loading={loading}
          currentPage={1}
          pageSize={2000}
          maxHeight="h-full"
          isNumber
        />
      </div>
    </div>
  )
}
