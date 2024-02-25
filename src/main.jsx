import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Opiskelu from './pages/opiskelu.jsx'
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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
