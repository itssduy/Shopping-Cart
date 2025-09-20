import { Outlet, useOutletContext, useParams } from "react-router"
const ShopLayout = ()=>{
    const {cart, setCart, addItemToCart} = useOutletContext();



    

    return (
        <>
            <Outlet context={addItemToCart}/>
        </>
    )
}


export default ShopLayout