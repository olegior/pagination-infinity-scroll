import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PaginationPage } from './pages/PaginationPage.jsx'
import { InfinitePage } from './pages/InfinitePage.jsx'
import './index.css'
import { StrictMode } from 'react'
import { Page404 } from './components/Page404.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      { path: '/', element: <h1>⬆ choose the link</h1> },
      { path: 'pagination', element: <PaginationPage /> },
      { path: 'infinite', element: <InfinitePage /> }
    ],
    errorElement: <Page404 />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
)
