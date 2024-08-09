import { Loader2 } from 'lucide-react'

export const Loading = ({
  size = '6rem',
  color = '#400053',
}: {
  size?: string
  color?: string
}) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className={`animate-spin duration-300 ${color}`}>
        <Loader2 size={size} />
      </span>
    </div>
  )
}
