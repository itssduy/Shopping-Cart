import { Navigate, redirect } from 'react-router'
import App from './components/App'
import Cart from './components/pages/Cart'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import Error from './components/pages/Error'
import Item from './components/pages/Item'
import ShopLayout from './components/templates/ShopLayout'
import Checkout from './components/pages/Checkout'

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {   index: true, 
                element: <Navigate to="home"/> },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'shop',
                element: <ShopLayout />,
                children: [
                    {
                        path: '',
                        element: <Shop />
                    }, 
                    {
                        path: ':id',
                        element: <Item />,
                    }
                ]
            },
            {
                path: 'cart',
                element: <Cart />,
            },
            {
                path: 'checkout',
                element: <Checkout />
            }
        ]
    }
]

export default routes