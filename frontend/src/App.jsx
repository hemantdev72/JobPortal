import { useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'

function App() {
  const [count, setCount] = useState(0)

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/signup",
      element:<Signup />
    },{
      path:"/jobs",
      element:<Jobs />
    },
    {
      path:"/description/:id",
      element:<JobDescription />
    },
    {
      path:"/browse",
      element:<Browse />
    },
    {
      path:"/profile",
      element:<Profile />
    },{
    path:"/admin/companies",
    element:<Companies />
    },
    {
      path:"/admin/companies/create",
      element:<CompanyCreate />
    },
    {
      path:"/admin/companies/:id",
      element:<CompanySetup /> 
    }

  ])

  return (
  <div>
    <RouterProvider router={appRouter} />
  </div>
  )
}

export default App
