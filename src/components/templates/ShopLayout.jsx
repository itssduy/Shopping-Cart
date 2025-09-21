import { Outlet, useOutletContext } from "react-router"
const ShopLayout = ()=>{
    const {cart, setCart, addItemToCart, removeItemFromCart, getItemById} = useOutletContext();


    

    return (
        <>
            <Outlet context={{addItemToCart, getItemById}}/>
        </>
    )
}


export default ShopLayout