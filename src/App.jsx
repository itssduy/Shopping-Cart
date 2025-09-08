import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
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
