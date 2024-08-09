import { createBrowserRouter } from 'react-router-dom'
import {
  AssetsPage,
  ComingSoonPage,
  DashboardPage,
  ExchangesPage,
  MainLayout,
  MarketsPage,
} from './loadables'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <DashboardPage />,
      },
      {
        path: 'assets',
        element: <AssetsPage />,
      },
      {
        path: 'exchanges',
        element: <ExchangesPage />,
      },
      {
        path: 'markets',
        element: <MarketsPage />,
      },
    ],
  },

  {
    path: '*',
    element: <ComingSoonPage />,
  },
])
