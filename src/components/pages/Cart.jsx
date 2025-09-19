import { useEffect, useState } from "react";
import { useOutletContext } from "react-router"

const Cart = () => {
    const [cart, setCart] = useOutletContext();


    return (
        <>
        <ul>
            {cart.map((item)=>{
                return <li key={item.id}>{item.id} : {item.count}</li>
            })}
        </ul>
            
        </>
    )
}

export default Cart