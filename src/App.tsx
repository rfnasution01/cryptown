import { Seo } from './components/seo'
import { AsideLayout } from './feature/layout/asideLayout'
import { HeaderLayout } from './feature/layout'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <Seo>
      <div className="flex h-full w-full">
        <AsideLayout />
        <div className="scrollbar flex h-full w-full flex-col overflow-y-auto">
          <HeaderLayout />
          <div className="scrollbar h-full flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </Seo>
  )
}
