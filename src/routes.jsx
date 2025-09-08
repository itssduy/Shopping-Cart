import App from './components/App'
import Cart from './components/pages/Cart'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
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