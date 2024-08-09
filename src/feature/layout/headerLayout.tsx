import { DialogConfirm } from '@/components/dialogs'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { MappingCurrency } from '../rates'
import { useRates } from '../rates/hooks/useRates'

export function HeaderLayout() {
  const { stateRates } = useRates()

  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <div className="flex items-center justify-end gap-32 px-32 py-12">
      <button
        onClick={() => setIsShow(true)}
        className="bg-cryptown-light-gray-secondary bo rder-cryptown-light text-cryptown-dark-grey flex items-center gap-12 rounded-2x border px-24 py-12 hover:bg-opacity-80"
      >
        <p>{stateRates?.symbol}</p>
        <ChevronDown size={16} />
      </button>
      <DialogConfirm
        setIsOpen={setIsShow}
        isOpen={isShow}
        width="auto"
        classNames="bg-cryptown-white text-cryptown-dark-grey text-[2rem] phones:text-[2.4rem]"
        classNamesTitle="text-[2.4rem] font-bold font-sans"
        title="Choose Currency"
        content={
          <div className="scrollbar flex h-full w-full flex-1 flex-col gap-32 overflow-y-auto">
            <div className="scrollbar flex h-full flex-1 overflow-y-auto">
              <MappingCurrency />
            </div>
            <div className="flex w-full items-center justify-end gap-16">
              <button
                onClick={() => setIsShow(false)}
                className="text-cryptown-light rounded-2xl bg-rose-700 px-24 py-12 hover:bg-opacity-80"
              >
                Cancel
              </button>
            </div>
          </div>
        }
      />
    </div>
  )
}
