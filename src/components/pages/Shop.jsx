import { useEffect, useState } from 'react';
import '../styles/Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);


    useEffect(()=>{
        const tempArr = [...items]
        for(let i = 0; i < 20; i++){
            tempArr[i] = i;
        }
        setItems(tempArr);
    }, [])
    

    return (
        <>
            <section className="container">
                <div className='shop'>
                    {items.map((x, i)=>{
                        return  <p key={i}> Item {x}</p>
                    })}
                </div>
            </section>
        </>
    )
}

export default Shop