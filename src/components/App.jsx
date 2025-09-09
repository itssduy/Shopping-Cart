import { Outlet } from 'react-router'
import Navbar from './shared/Navbar'
import './App.css'

function App() {

  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default App
