import '../src/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router'
import BookProvider from './Context/BookProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
    </BookProvider>
  </StrictMode>,
)
