import { LogoHeader } from './logoHeader'
import { MappingMenu } from './mappingMenu'

export function AsideLayout() {
  return (
    <div className="scrollbar bg-cryptown-deep-blue flex h-full w-1/5 flex-col gap-64 overflow-y-auto border-r p-32">
      <LogoHeader />
      <MappingMenu />
    </div>
  )
}
