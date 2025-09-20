import { Outlet, useOutletContext, useParams } from "react-router"

const ShopLayout = ()=>{
    const { id } = useParams();
    const [cart, setCart] = useOutletContext();


    const itemInCart = ()=>{
        let itemFound;
        cart.map((item)=>{
            if(item.id == id){
                itemFound = item
            }
            
        })
        return itemFound
    }

    const addItemToCart = ()=>{

        if(itemInCart()){
            let tempCart = [...cart]

            tempCart = tempCart.map((item)=>{

                let newItem = item.id == id ? {...item, count: item.count+1} : item
                return newItem
            })
            setCart([...tempCart])
        } else {
            setCart([...cart, {id: id, count: 1}]);
        }

    }

    return (
        <>
            <Outlet context={addItemToCart}/>
        </>
    )
}


export default ShopLayout