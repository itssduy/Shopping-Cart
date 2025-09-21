import { Outlet } from 'react-router'
import Header from './templates/Header'
import Footer from './templates/Footer'
import './App.css'
import { useEffect, useState } from 'react'


function App() {
  const [cart, setCart] = useState([]);
  

  useEffect(()=>{
    //Check to see if a cart is in local storage and if it is then load it
    
  }, [])


  const itemsInCart = ()=>{
    let sum = 0;
    cart.map((item)=>{
      sum += item.count;
    })

    const roundedSum = (Math.round((sum + Number.EPSILON) * 100)/100)
    return roundedSum;
  }

  const getItemById = async (id)=>{
    try{
      const response = await fetch('https://fakestoreapi.com/products/'+id)
      
      const data = await response.json();
      return data
    }
    catch(error){
      console.log(error)
    }

  }
  const addItemToCart = async (id)=>{
    let tempCart = [...cart]
    const curItem = await getItemById(id);
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

        <Header itemsInCart={itemsInCart}/>
        <main>
          <Outlet context={{cart, setCart, addItemToCart, removeItemFromCart, getItemById}}/>
        </main>

        <Footer />
    </>
  )
}

export default App
