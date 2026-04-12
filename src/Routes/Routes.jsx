import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from '../Pages/HomePage/HomePage'
import BooksPage from '../Pages/BooksPage/BooksPage'
import MainLayout from '../Layout/MainLayout'
import ErrorPage from '../Pages/ErrorPage/Errorpage'
import BookDetails from '../Pages/BookDetails/BookDetails'


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
      },
      {
        path:'/bookDetails/:bookIdParams',
        Component: BookDetails,
        loader: ()=> fetch('/public/booksData.json')
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])