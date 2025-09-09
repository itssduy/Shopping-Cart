import { Navigate } from 'react-router'
import App from './components/App'
import Cart from './components/pages/Cart'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import Error from './components/pages/Error'

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '',
                element: <Navigate to='home'/>
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'shop',
                element: <Shop />,
            },
            {
                path: 'cart',
                element: <Cart />,
            }
        ]
    }
]

export default routes