import { ReactNode, useState } from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from '../menubar'
import clsx from 'clsx'

export function MenubarInfo({
  trigger,
  content,
  width = 'w-[30rem]',
  padding = 'p-12',
}: {
  trigger: ReactNode
  content: ReactNode
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
              `${width} absolute -right-[10rem] bottom-48 bg-white ${padding} text-[2rem] text-primary-900 shadow-lg transition-all duration-300`,
            )}
          >
            {content}
          </MenubarContent>
        )}
      </MenubarMenu>
    </Menubar>
  )
}
