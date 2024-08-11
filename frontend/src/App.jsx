import { useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

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
    }

  ])

  return (
  <div>
    <RouterProvider router={appRouter} />
  </div>
  )
}

export default App
