import { useOutletContext } from "react-router"

const Item = ()=>{

    const addItem = useOutletContext();



    return (
        <div >
            Item
            <button onClick={addItem}>BUY NOW</button>
        </div>
    )
}


export default Item