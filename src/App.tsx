import { Seo } from './components/seo'
import { AsideLayout } from './feature/layout/asideLayout'

export default function MainLayout() {
  return (
    <Seo>
      <div className="flex h-full">
        <AsideLayout />
        <div className="scrollbar flex h-full overflow-y-auto p-32">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          explicabo ipsa perspiciatis numquam quo quos asperiores fuga dolorem
          sit odit mollitia corrupti, dignissimos iusto tenetur natus optio.
          Sit, nemo tempore?
        </div>
      </div>
    </Seo>
  )
}
