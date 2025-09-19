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
                    {items.map((x)=>{
                        return  <Link to={`${x.id}`} key={x.id}><p> {x.val}</p></Link>
                    })}
                </div>
            </section>
        </>
    )
}

export default Shop