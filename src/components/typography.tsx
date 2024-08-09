import clsx from 'clsx'

export function Typography({
  title,
  size = 'sm',
  className,
  weight = 'normal',
}: {
  title: string
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  weight?: 'normal' | 'thin' | 'light' | 'medium' | 'semibold' | 'bold'
  className?: string
}) {
  return (
    <p
      className={clsx(
        `${className}`,
        {
          'text-[8rem]': size === 'xl',
          'text-[5rem]': size === 'lg',
          'text-[3.2rem]': size === 'md',
          'text-[2.2rem]': size === 'sm',
          'text-[1.6rem]': size === 'xs',
        },
        {
          'font-bold': weight === 'bold',
          'font-semibold': weight === 'semibold',
          'font-medium': weight === 'medium',
          'font-normal': weight === 'normal',
          'font-light': weight === 'light',
          'font-thin': weight === 'thin',
        },
      )}
      style={{ lineHeight: '130%' }}
    >
      {title}
    </p>
  )
}
