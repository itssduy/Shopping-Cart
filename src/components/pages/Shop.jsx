import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import '../styles/Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);


    useEffect(()=>{
        const tempArr = [...items]
        for(let i = 0; i < 20; i++){
            tempArr[i] = "item-" + i;
        }
        setItems(tempArr);
    }, [])
    
 


    return (
        <>
            <section className="container">
                <div className='shop'>
                    {items.map((x, i)=>{
                        return  <Link to={`${x}`} key={i}><p> {x}</p></Link>
                    })}
                </div>
            </section>
        </>
    )
}

export default Shop