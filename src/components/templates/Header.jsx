import Navbar from '../shared/Navbar'

import '../styles/Header.css'
const Header = ({itemsInCart})=>{

    return (
        <header>
             <Navbar cartLength={itemsInCart()}/>


        </header>
    )
}


    
export default Header