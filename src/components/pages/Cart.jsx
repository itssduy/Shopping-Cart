import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router"


const itemsPage = '/shop/' 

const Cart = () => {
    const {cart, setCart, addItemToCart, removeItemFromCart} = useOutletContext();

    let sum = 0;
    cart.map((item)=>{
        sum+=Math.round(item.price * item.count*100)/100
    })

    return (
        <>
        <ul>
            {cart.map((item)=>{
                return (
                    <li key={item.id}> 

                        <Link to={itemsPage + item.id}> 
                            {item.title} : {item.count} 
                        </Link> 
                        
                            <button onClick={()=>{removeItemFromCart(item.id)}}>-</button>
                            <button onClick={ ()=>{addItemToCart(item.id)}}>+</button>
                    </li>
                )
            })}
        </ul>

        <h1>Total: {sum}</h1>
            
        </>
    )
}

export default Cart