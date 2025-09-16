import { Link } from 'react-router'
import '../styles/Navbar.css'

const Navbar = () => {


    return (
        <>
            <nav>
                <ul >
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar