import {
  CircleGauge,
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
} from 'lucide-react'

export type MenuNavigationType = {
  name: string
  icon: JSX.Element
}

export const MenuNavigation: MenuNavigationType[] = [
  {
    name: 'Dashboard',
    icon: <CircleGauge size={16} />,
  },
  {
    name: 'Assets',
    icon: <LayoutDashboard size={16} />,
  },
  {
    name: 'Exchanges',
    icon: <ShoppingCart size={16} />,
  },
  {
    name: 'Markets',
    icon: <ShoppingBag size={16} />,
  },
]
