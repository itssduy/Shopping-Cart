import { useOutletContext, useParams } from "react-router"
const Item = ()=>{
    const { id } = useParams();
    const addItemToCart = useOutletContext();



    return (
        <div >
            Item
            <button onClick={()=> {addItemToCart(id)}}>BUY NOW</button>
        </div>
    )
}


export default Item