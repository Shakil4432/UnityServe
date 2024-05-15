import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Components/Routes/Routes.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'

axios.defaults.withCredentials=true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>,
)
