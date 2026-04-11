import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from '../Pages/HomePage/HomePage'
import BooksPage from '../Pages/BooksPage/BooksPage'
import MainLayout from '../Layout/MainLayout'
import ErrorPage from '../Pages/ErrorPage/Errorpage'


export const router = createBrowserRouter([
  {
    path:'/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path:'/books',
        Component: BooksPage
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])