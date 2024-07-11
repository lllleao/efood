import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ItalianMenu from './pages/ItalianMenu'

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardapio/:id" element={<ItalianMenu />} />
        </Routes>
    )
}

export default Rotas
