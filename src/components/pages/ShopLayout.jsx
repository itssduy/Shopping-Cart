import { Outlet, useOutletContext, useParams } from "react-router"

const ShopLayout = ()=>{
    const { id } = useParams();
    const [cart, setCart] = useOutletContext();


    const addItemToCart = ()=>{
        const curNum = cart[id] ? cart[id] : 0
        setCart({...cart, [id]: curNum+1})
    }

    return (
        <>
            <Outlet context={addItemToCart}/>
        </>
    )
}


export default ShopLayout