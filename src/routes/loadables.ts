import loadable from '@loadable/component'

export const MainLayout = loadable(() => import('@/App'))

export const ComingSoonPage = loadable(() => import('@/pages/comingSoon'))
export const AssetsPage = loadable(() => import('@/pages/assets'))
export const MarketsPage = loadable(() => import('@/pages/markets'))
export const DashboardPage = loadable(() => import('@/pages/dashboard'))
export const ExchangesPage = loadable(() => import('@/pages/exchanges'))
