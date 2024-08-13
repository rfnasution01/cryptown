import { ReactNode, useState } from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from '../menubar'
import clsx from 'clsx'

export function MenubarComponent({
  trigger,
  content,
  position = 'right',
  width = 'w-[30rem]',
  padding = 'p-12',
}: {
  trigger: ReactNode
  content: ReactNode
  position?: 'left' | 'right'
  width?: string
  padding?: string
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Menubar className="px-4">
      <MenubarMenu>
        <MenubarTrigger
          className="w-full text-center transition-all duration-300 hover:cursor-pointer hover:opacity-90 disabled:cursor-not-allowed"
          variant="nothing"
          layout="icon"
          size="fit"
          onClick={handleMenuClick}
        >
          {trigger}
        </MenubarTrigger>
        {isMenuOpen && (
          <MenubarContent
            className={clsx(
              `${width} absolute top-0 bg-white ${padding} text-[2rem] text-primary-900 shadow-lg transition-all duration-300`,
              {
                'left-0': position === 'right',
                'right-0 phones:-right-[5rem]': position === 'left',
              },
            )}
          >
            {content}
          </MenubarContent>
        )}
      </MenubarMenu>
    </Menubar>
  )
}
