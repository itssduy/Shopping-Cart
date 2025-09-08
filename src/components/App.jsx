import { Outlet } from 'react-router'
import Navbar from './shared/Navbar'
import './App.css'

function App() {

  return (
    <>
      <header>
        <Navbar />

      </header>
      <hr />
      <Outlet />
    </>
  )
}

export default App
