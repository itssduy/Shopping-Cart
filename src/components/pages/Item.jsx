import { useOutletContext } from "react-router"

const Item = ()=>{

    const addItemToCart = useOutletContext();



    return (
        <div >
            Item
            <button onClick={addItemToCart}>BUY NOW</button>
        </div>
    )
}


export default Item