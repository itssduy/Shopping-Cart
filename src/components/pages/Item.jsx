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
            {item ?
                <>
                    <img className="itemImage" src={item.image} alt="" />


                    <div className="itemDetails">
                        <h1>{ item.title} </h1>
                        <p>{ item.price} </p>


                        <h2>About this Item</h2>
                        <p>{ item.description} </p>
                        <p>{ item.rating.rate}  out of 5 stars ({item.rating.count})</p>


                        <button onClick={()=> {addItemToCart(id)}}>Add to Cart</button>

                    </div>
                </>

                : 
                <h1>Loading...</h1>
            }


        </div>
    )
}


export default Item