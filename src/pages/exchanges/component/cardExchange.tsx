import { PriceLabel } from '@/components/price/priceLabel'
import { ChartNoAxesColumn, Kanban, ShoppingBag, Store } from 'lucide-react'

export function CardExchangeGroup({
  bnbDominance,
  totalPairs,
  totalVolume,
  exchanges,
}: {
  bnbDominance: number
  totalPairs: number
  totalVolume: number
  exchanges: number
}) {
  return (
    <div className="scrollbar grid w-full grid-cols-4 gap-32 overflow-y-auto">
      {/* --- Exchanges --- */}
      <div
        className="col-span-1 flex h-full rounded-2xl border p-32 phones:col-span-2"
        style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="flex flex-1 flex-col gap-12">
          <p className="font-roboto text-[3.6rem] text-cryptown-dark-grey">
            {exchanges}
          </p>
          <p className="uppercase">Exchanges</p>
        </div>
        <div className="flex items-center justify-center">
          <Store size={32} />
        </div>
      </div>
      {/* --- Pairs --- */}
      <div
        className="col-span-1 flex h-full rounded-2xl border p-32 phones:col-span-2"
        style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="flex flex-1 flex-col gap-12">
          <p className="font-roboto text-[3.6rem] text-cryptown-dark-grey">
            {totalPairs}
          </p>
          <p className="uppercase">Exchange Pairs</p>
        </div>
        <div className="flex items-center justify-center">
          <ShoppingBag size={32} />
        </div>
      </div>
      {/* --- Volume --- */}
      <div
        className="col-span-1 flex h-full rounded-2xl border p-32 phones:col-span-2"
        style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="flex flex-1 flex-col gap-12">
          <p className="font-roboto text-[3.6rem] text-cryptown-dark-grey">
            <PriceLabel value={Number(totalVolume)} />
          </p>
          <p className="uppercase">Exchange Vol</p>
        </div>
        <div className="flex items-center justify-center">
          <ChartNoAxesColumn size={32} />
        </div>
      </div>
      {/* --- BNB Dominance --- */}
      <div
        className="col-span-1 flex h-full rounded-2xl border p-32 phones:col-span-2"
        style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="flex flex-1 flex-col gap-12">
          <p className="font-roboto text-[3.6rem] text-cryptown-dark-grey">
            {bnbDominance?.toFixed(2)}%
          </p>
          <p className="uppercase">BNB Dominance</p>
        </div>
        <div className="flex items-center justify-center">
          <Kanban size={32} />
        </div>
      </div>
    </div>
  )
}
