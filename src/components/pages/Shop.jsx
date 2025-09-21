import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import '../styles/Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        try {

            (async ()=>{
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setItems(data)
            })()

        } catch (error){
            console.log(error)
        }
        
        }, [])

    return (
        <>
            <section className="container">
                <div className='shop'>
                    {items.map((item)=>{
                        return  (
                            <Link to={`${item.id}` } className='shopItem' key={item.id}>
                                <img className='shopItemImage' src={item.image} alt="" />
                                <p>${item.price}</p>
                                <p className='shopItemName'> {item.title} </p>

                            </Link>)
                    })}
                </div>
            </section>
        </>
    )
}

export default Shop