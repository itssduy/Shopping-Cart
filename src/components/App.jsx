import { Outlet } from 'react-router'
import Navbar from './shared/Navbar'
import './App.css'
import { useEffect, useState } from 'react'
function App() {
  const [cart, setCart] = useState([]);
  

  useEffect(()=>{
    //Check to see if a cart is in local storage and if it is then load it
    
  }, [])


  const itemsInCart = ()=>{
    let sum = 0;
    const count = cart.map((item)=>{
      sum += item.count;
    })
    return sum;
  }
  return (
    <>
        <Navbar cartLength={itemsInCart()}/>
        <Outlet context={[cart,setCart]}/>
    </>
  )
}

export default App
