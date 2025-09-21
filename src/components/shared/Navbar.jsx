import { Link, useOutletContext } from 'react-router'
import '../styles/Navbar.css'
import diamond from '../../assets/diamond.svg'
import flower from '../../assets/flower.svg'
const Navbar = ({cartLength}) => {

    return (
        <>
            <nav>
                <ul className="navlist">

                    <div className='menu'>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                    </div>
                    <div className='logoContainer'>
                        <h1>StyleHub</h1>
                        <img className='logo' src={flower} alt="" />

                    </div>
                    <div className='cart'>
                        <li ><Link to='/cart'>Cart ({cartLength})</Link></li>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Navbar