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
                        
                        <Link to={itemsPage + item.id} className="cartItemDetails"> 
                            <img src={item.image}></img>

                            <div className="cartItemDesc">
                                <h1>{item.title}</h1>
                                <h3>{item.price}</h3>

                            </div>
                            
                        </Link> 
                        
                            
                        <div className='increment'>
                            <button className="incrementBtn" onClick={()=>{removeItemFromCart(item.id)}}>-</button>
                            <h1>{item.count}</h1>
                            <button className="incrementBtn" onClick={ ()=>{addItemToCart(item.id)}}>+</button>
                        </div>
                        
                    </li>
                )
            })}
        </ul>


        <div className="cartInfo">
            <h1>Total: {sum}</h1>
            <Link to='/checkout'><button  className="checkoutBtn">Checkout</button></Link>


        </div>

        </>
    )
}

export default Cart