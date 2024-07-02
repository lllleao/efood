import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ItalianMenu from './pages/ItalianMenu'
import JapanMenu from './pages/JapanMenu'

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/italian" element={<ItalianMenu />} />
            <Route path="/japan" element={<JapanMenu />} />
        </Routes>
    )
}

export default Rotas
