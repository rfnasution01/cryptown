import { useRates } from '@/feature/rates/hooks/useRates'
import { formatNumberValue } from '@/utils/formatNumber'

export function PriceLabel({ value }: { value: number }) {
  const { stateRates } = useRates()
  const currencyRates = 1 / Number(stateRates?.rateUsd)

  return (
    <div className="flex items-center gap-32">
      {stateRates?.currencySymbol ?? stateRates?.symbol}{' '}
      {formatNumberValue(Number(value) * currencyRates)}
    </div>
  )
}
