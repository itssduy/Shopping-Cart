import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router"

const Cart = () => {
    const [cart, setCart] = useOutletContext();


    let sum = 0;
    cart.map((item)=>{
        sum+=item.price * item.count
    })

    return (
        <>
        <ul>
            {cart.map((item)=>{
                return <li key={item.id}> <Link to={'/shop/' + item.id}> {item.name} : {item.count} </Link> </li>
            })}
        </ul>

        <h1>Total: {sum}</h1>
            
        </>
    )
}

export default Cart