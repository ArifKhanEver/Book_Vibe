import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from '../Pages/HomePage/HomePage'
import BooksPage from '../Pages/BooksPage/BooksPage'
import MainLayout from '../Layout/MainLayout'
import ErrorPage from '../Pages/ErrorPage/Errorpage'
import BookDetails from '../Pages/BookDetails/BookDetails'
import PagesToRead from '../Pages/PagesToRead/PagesToRead'


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
        loader: ()=> fetch('/booksData.json')
      },
      {
        path:'/pages-to-read',
        Component: PagesToRead,
        loader: ()=> fetch('/booksData.json')
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])