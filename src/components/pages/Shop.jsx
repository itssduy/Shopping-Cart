import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import '../styles/Shop.css'
import itemsfile from '../../Items.json'

const Shop = () => {
    const [items, setItems] = useState(itemsfile);

    return (
        <>
            <section className="container">
                <div className='shop'>
                    {items.map((item)=>{
                        return  <Link to={`${item.id}`} key={item.id}><p> {item.name}</p></Link>
                    })}
                </div>
            </section>
        </>
    )
}

export default Shop