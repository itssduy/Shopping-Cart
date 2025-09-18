import { Outlet } from 'react-router'
import Navbar from './shared/Navbar'
import './App.css'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState({});

  
  return (
    <>
        <Navbar />
        <Outlet context={[cart,setCart]}/>
    </>
  )
}

export default App
