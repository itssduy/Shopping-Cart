import { Link, useOutletContext } from 'react-router'
import '../styles/Navbar.css'

const Navbar = ({cartLength}) => {

    return (
        <>
            <nav>
                <ul className="navlist">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/cart'>Cart {cartLength}</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar