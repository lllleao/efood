import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Cardapios from '../../components/Cardapios'

const Cardapio = () => {
    const { id } = useParams()
    const [restaurante, setRestaurante] = useState<Restaurant>()
    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setRestaurante(res)
            })
    }, [id])

    if (!restaurante) {
        return <h2>Carregando...</h2>
    }

    return <Cardapios restaurant={restaurante} />
}

export default Cardapio
