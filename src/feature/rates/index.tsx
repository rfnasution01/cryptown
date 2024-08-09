import { Loading } from '@/components/loading'
import { useRates } from './hooks/useRates'
import { ResRatesType } from '@/store/slice/rates/ratesType'
import { convertToTitleCase } from '@/utils/formatText'
import { Gem } from 'lucide-react'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { setStateRates } from '@/store/reducer/setRates'

export function MappingCurrency() {
  const dispatch = useDispatch()

  const { rates, loading, setStateRates: setRates, stateRates } = useRates()

  const transformDataByType = (data: ResRatesType[]) => {
    return data?.reduce(
      (acc, item) => {
        // Jika belum ada grup dengan tipe ini, buat grup baru
        if (!acc[item?.type]) {
          acc[item?.type] = []
        }
        // Tambahkan item ke grup berdasarkan tipe
        acc[item?.type]?.push(item)
        return acc
      },
      {} as { [key: string]: ResRatesType[] },
    )
  }

  const groupedRates = transformDataByType(rates)

  return (
    <div className="scrollbar flex h-full w-full flex-1 flex-col gap-48 overflow-y-auto">
      {loading ? (
        <Loading />
      ) : rates?.length > 0 ? (
        Object.keys(groupedRates)?.map((type) => (
          <div key={type} className="flex flex-col gap-24">
            <h3 className="text-[2rem] font-semibold">{type?.toUpperCase()}</h3>
            <div className="grid grid-cols-2 gap-24">
              {groupedRates[type]?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    const rates = {
                      id: item?.id,
                      symbol: item?.symbol,
                      currencySymbol: item?.currencySymbol,
                      rateUsd: item?.rateUsd,
                      type: item?.type,
                    }
                    setRates(rates)
                    dispatch(setStateRates(rates))
                    localStorage.setItem('savingRates', JSON.stringify(rates))
                  }}
                  className={clsx(
                    'flex items-center gap-24 rounded-2x border p-24 hover:cursor-pointer',
                    {
                      'border-cryptown-deep-blue bg-cryptown-deep-blue':
                        stateRates?.id === item?.id,
                      'border-cryptown-light hover:border-cryptown-deep-blue bg-white':
                        stateRates?.id !== item?.id,
                    },
                  )}
                >
                  <div
                    className={clsx(
                      'flex h-[6rem] w-[6rem] items-center justify-center gap-12 rounded-full',
                      {
                        'text-cryptown-deep-blue bg-white':
                          stateRates?.id === item?.id,
                        'bg-cryptown-deep-blue text-cryptown-light-gray':
                          stateRates?.id !== item?.id,
                      },
                    )}
                  >
                    {item?.currencySymbol ? (
                      <p>{item?.currencySymbol}</p>
                    ) : (
                      <Gem size={16} />
                    )}
                  </div>
                  <div
                    className={clsx('flex flex-col gap-8', {
                      'text-cryptown-white': stateRates?.id === item?.id,
                      'text-cryptown-deep-blue': stateRates?.id !== item?.id,
                    })}
                  >
                    <p className="font-sf-pro text-[2.2rem] font-bold">
                      {convertToTitleCase(item?.id)}{' '}
                      <span
                        className={clsx('text-[1.8rem]', {
                          'text-cryptown-light': stateRates?.id === item?.id,
                          'text-cryptown-light-gray':
                            stateRates?.id !== item?.id,
                        })}
                      >
                        {item?.symbol}
                      </span>
                    </p>
                    <p
                      className={clsx('uppercase', {
                        'text-cryptown-light': stateRates?.id === item?.id,
                        'text-cryptown-light-gray': stateRates?.id !== item?.id,
                      })}
                    >
                      {item?.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No data.</p>
      )}
    </div>
  )
}
