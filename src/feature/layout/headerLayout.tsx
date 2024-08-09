import { DialogConfirm } from '@/components/dialogs'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { MappingCurrency } from '../rates'
import { useRates } from '../rates/hooks/useRates'
import { ResRatesType } from '@/store/slice/rates/ratesType'
import { Searching } from '@/components/searching'

export function HeaderLayout() {
  const { rates, loading, setStateRates: setRates, stateRates } = useRates()

  const [isShow, setIsShow] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const transformDataByType = (data: ResRatesType[]) => {
    return data?.reduce(
      (acc, item) => {
        if (!acc[item?.type]) {
          acc[item?.type] = []
        }
        acc[item?.type]?.push(item)
        return acc
      },
      {} as { [key: string]: ResRatesType[] },
    )
  }

  // Filter the rates based on the search query
  const filteredRates = rates.filter(
    (item) =>
      item?.symbol?.toLowerCase().includes(search.toLowerCase()) ||
      item?.id?.toLowerCase().includes(search.toLowerCase()),
  )

  const groupedRates = transformDataByType(filteredRates)

  return (
    <div className="flex items-center justify-end gap-32 px-32 py-12">
      <button
        onClick={() => setIsShow(true)}
        className="flex items-center gap-12 rounded-2x border border-cryptown-light bg-cryptown-light-gray-secondary px-24 py-12 text-cryptown-dark-grey hover:bg-opacity-80"
      >
        <p>{stateRates?.symbol}</p>
        <ChevronDown size={16} />
      </button>

      <DialogConfirm
        setIsOpen={setIsShow}
        isOpen={isShow}
        width="60%"
        classNames="bg-cryptown-white border-cryptown-grey text-cryptown-deep-blue text-[2rem] phones:text-[2.4rem]"
        classNamesTitle="text-[2.4rem] font-bold font-sans"
        title="Choose Currency"
        content={
          <div className="scrollbar flex h-full w-full flex-1 flex-col gap-32 overflow-y-auto">
            <Searching setSearch={setSearch} />

            <MappingCurrency
              loading={loading}
              setRates={setRates}
              stateRates={stateRates}
              groupedRates={groupedRates}
              filteredRates={filteredRates}
            />
          </div>
        }
        buttonGroup={
          <div className="flex w-full items-center justify-end gap-16">
            <button
              onClick={() => setIsShow(false)}
              className="rounded-2xl bg-rose-700 px-24 py-12 text-cryptown-white hover:bg-opacity-80"
            >
              Close
            </button>
          </div>
        }
      />
    </div>
  )
}
