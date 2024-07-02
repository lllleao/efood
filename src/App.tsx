import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import Rotas from './routes'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './store'

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <GlobalStyle />
                <Rotas />
                <Footer />
            </Provider>
        </BrowserRouter>
    )
}

export default App
