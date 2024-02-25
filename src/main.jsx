import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Opiskelu from './pages/opiskelu.jsx'
import Asuminen from './pages/Asuminen.jsx'
import Matkustaminen from './pages/Matkustaminen.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/opiskelu/",
    element: <Opiskelu />
  },
  {
    path: "/asuminen/",
    element: <Asuminen />
  },
  {
    path: "/matkustaminen/",
    element: <Matkustaminen />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
