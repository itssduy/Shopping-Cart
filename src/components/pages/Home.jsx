import '../styles/Home.css'
import diamond from '../../assets/diamond.svg'
import freeShipping from '../../assets/free-shipping.svg'
import returnBox from '../../assets/return-box.svg'

const Home = () => {


    return (
        <>
            <div className='home'>
                <section>
                    <h1>Welcome to StyleHub!</h1>
                    <h3>Discover amazing products at a great price!</h3>
                </section>

                <section>
                    <h3>Free shipping!</h3>
                    <img className='icon' src={freeShipping} alt="" />

                </section>

                <section>
                    <h3>Best quality!</h3>
                    <img className='icon' src={diamond} alt="" />
                </section>

                <section>
                    <h3>Easy returns!</h3>
                    <img className='icon' src={returnBox} alt="" />
                </section>
            </div>
        </>
    )
}

export default Home