import { useOutletContext, useParams } from "react-router"
import '../styles/Item.css'

const Item = ()=>{
    const { id } = useParams();
    const addItemToCart = useOutletContext();



    return (
        <div className="item">
            Item
            <button onClick={()=> {addItemToCart(id)}}>BUY NOW</button>
        </div>
    )
}


export default Item