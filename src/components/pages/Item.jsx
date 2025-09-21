import { useOutletContext, useParams } from "react-router"
import '../styles/Item.css'
import { useEffect, useState } from "react";

const Item = ()=>{
    const [count, setCount] = useState(1)
    const [item, setItem] = useState();
    const { id } = useParams();
    const {addItemToCart, getItemById} = useOutletContext();


    useEffect(()=>{
        (async ()=>{
            setItem(await getItemById(id));
        })();
    }, [])

    const addCount = ()=>{
        setCount(count+1);
    }

    const removeCount = ()=>{
        if(count > 1){
            setCount(count-1);
        }
    }

    return (
        <div className="item">
            {item ?
                <>
                    <img className="itemImage" src={item.image} alt="" />


                    <div className="itemDetails">
                        <h1>{ item.title} </h1>
                        <h2>${ item.price} </h2>


                        <h2>About this Item</h2>
                        <p>{ item.description} </p>
                        <p>{ item.rating.rate}  out of 5 stars ({item.rating.count})</p>


                        <div className="count">
                            <button onClick={removeCount}>-</button>
                            <p>{count}</p>
                            <button onClick={addCount}>+</button>

                        </div>
                        <button onClick={()=> {addItemToCart(id, count)}}>Add to Cart</button>


                    </div>
                </>

                : 
                <h1>Loading...</h1>
            }


        </div>
    )
}


export default Item