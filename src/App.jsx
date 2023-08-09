import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import MainLayout from './layouts/MainLayout'
import Create from './components/Create'
import BlogDetail from './components/BlogDetail';

const appRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        // path: '',
        index: true,
        element: <Home />
      },
      {
        path: '/create',
        element: <Create />
      },
      {
        path: '/blog/:id',
        element: <BlogDetail />
      }
    ]
  }
]

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: appRoutes
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
