import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router"
import '../styles/Cart.css'

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
                    <li key={item.id} className="cartItem"> 

                        <Link to={itemsPage + item.id} className="cartItem"> 
                            {item.title} : {item.count}
                        </Link> 
                        
                            <button className="incrementButton" onClick={()=>{removeItemFromCart(item.id)}}>-</button>
                            <button className="incrementButton" onClick={ ()=>{addItemToCart(item.id)}}>+</button>
                    </li>
                )
            })}
        </ul>


        <h1>Total: {sum}</h1>
        <button>Checkout</button>
 
        </>
    )
}

export default Cart