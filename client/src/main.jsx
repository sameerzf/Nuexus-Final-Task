import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Header from './components/Header'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Pricing from './pages/Pricing'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup';
import UserProvider from './context/userContext'
const router = createBrowserRouter([
  {
    path:"/",
    element: <UserProvider><Layout/></UserProvider>,
    children:[
      {index:true,element:<Home/>},
      {path:"courses",element:<Courses/>},
      {path:"pricing",element:<Pricing/>},
      {path:"dashboard",element:<Dashboard/>},

      {path:"profile",element:<Profile/>}

    ]
  },{

    path:'/auth/',
    element: <UserProvider><Layout/></UserProvider>,
    children:[
      {path:"login",element:<Login/>},
      {
        path:"signup",element:<Signup/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
