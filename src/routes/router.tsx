import { createBrowserRouter } from 'react-router-dom'
import {
  AssetsPage,
  ComingSoonPage,
  DashboardPage,
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
