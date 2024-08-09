import { MenuNavigation } from '@/data/menu'
import { usePathname } from '@/hooks/usePathname'
import { convertToSlug } from '@/utils/formatText'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export function MappingMenu() {
  const { firstPathname } = usePathname()

  return (
    <div className="flex flex-col gap-12">
      {MenuNavigation?.map((item, idx) => (
        <Link
          to={item?.name === 'Dashboard' ? '/' : convertToSlug(item?.name)}
          key={idx}
          className={clsx(
            'flex items-center gap-12 rounded-2xl px-24 py-12 transition-all duration-300 ease-in-out',
            {
              'bg-cryptown-golder-yellow text-cryptown-deep-indigo':
                convertToSlug(item?.name) === firstPathname ||
                (item?.name === 'Dashboard' && firstPathname === ''),
              'hover:bg-cryptown-dark-blue hover:text-cryptown-golder-yellow text-white':
                convertToSlug(item?.name) !== firstPathname &&
                (item?.name !== 'Dashboard' || firstPathname !== ''),
            },
          )}
        >
          <span className="text-2xl">{item?.icon}</span>
          <p className="font-semibold">{item?.name}</p>
        </Link>
      ))}
    </div>
  )
}
