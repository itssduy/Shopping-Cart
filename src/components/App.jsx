import { Outlet } from 'react-router'
import Navbar from './shared/Navbar'
import './App.css'
import { useEffect, useState } from 'react'
import itemFile from '../Items.json'


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

  const findItemById = (id)=>{

    return itemFile.find((item)=>{

        return item.id == id
    })
  }
  const addItemToCart = (id)=>{
    let tempCart = [...cart]
    let itemFound = false;
    tempCart = tempCart.map((item)=>{

        let newItem = item;
        if(item.id == id){
            itemFound = true;
            newItem = {...item, count: item.count+1}
        }
        return newItem
    })
    if(itemFound){
        setCart(tempCart)
    } else {
        const curItem = findItemById(id);
        setCart([...cart, {...curItem, count: 1}]);

    }
        
  }

  const removeItemFromCart = (id)=>{
    let tempCart = [...cart.filter((item)=>{return item.count != 0})]
    tempCart = tempCart.map((item)=>{
      let newItem = item;
      if(item.id == id ){
          newItem = {...item, count: item.count-1}

        
          

      } 
      return newItem
    })
    setCart(tempCart)
  }




  return (
    <>
        <Navbar cartLength={itemsInCart()}/>
        <Outlet context={{cart, setCart, addItemToCart, removeItemFromCart}}/>
    </>
  )
}

export default App
