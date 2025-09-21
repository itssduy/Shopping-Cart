import { useOutletContext, useParams } from "react-router"
import '../styles/Item.css'
import { useEffect, useState } from "react";

const Item = ()=>{
    const [item, setItem] = useState();
    const { id } = useParams();
    const {addItemToCart, getItemById} = useOutletContext();


    useEffect(()=>{
        (async ()=>{
            setItem(await getItemById(id));
        })();
    }, [])

    return (
        <div className="item">
            <img src={item.image} alt="" />

            <p>{ item && item.title} </p>
            <p>{ item && item.description} </p>
            <p>{ item && item.price} </p>

            <button onClick={()=> {addItemToCart(id)}}>BUY NOW</button>
        </div>
    )
}


export default Item