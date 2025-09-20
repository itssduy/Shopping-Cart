import { Outlet, useOutletContext, useParams } from "react-router"
import itemFile from '../../Items.json'
const ShopLayout = ()=>{
    const { id } = useParams();
    const [cart, setCart] = useOutletContext();


    const findItemById = ()=>{

        return itemFile.find((item)=>{
            return item.id == id
        })
    }

    const addItemToCart = ()=>{

        let tempCart = [...cart]
        let itemFound = false;
        tempCart = tempCart.map((item)=>{

            let newItem = item;
            if(item.id == id){
                itemFound = true;
                newItem = {...item, count: item.count+1}
            }
            return newItem
        })
        if(itemFound){
            setCart([...tempCart])
        } else {
            const curItem = findItemById();
            setCart([...cart, {...curItem, count: 1}]);

        }
        

    }

    return (
        <>
            <Outlet context={addItemToCart}/>
        </>
    )
}


export default ShopLayout