import { useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'

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
      path:"/browse",
      element:<Browse />
    }

  ])

  return (
  <div>
    <RouterProvider router={appRouter} />
  </div>
  )
}

export default App
