import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import '../styles/Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data));
        }, [])

    return (
        <>
            <section className="container">
                <div className='shop'>
                    {items.map((item)=>{
                        return  <Link to={`${item.id}`} key={item.id}><p className='shopItem'> {item.title}</p></Link>
                    })}
                </div>
            </section>
        </>
    )
}

export default Shop