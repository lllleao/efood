import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import Rotas from './routes'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './store'
import Cart from './components/Cart'
import Checkout from './pages/Checkout'

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <GlobalStyle />
                <Rotas />
                <Footer />
                <Cart />
            </Provider>
        </BrowserRouter>
    )
}

export default App
