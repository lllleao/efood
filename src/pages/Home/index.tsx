import { useEffect, useState } from 'react'
import MainPage from '../../containers/MainPage'

export type Restaurant = {
    id: number
    avaliacao: number
    capa: string
    cardapio?: [
        {
            descricao: string
            foto: string
            id: number
            nome: string
            porcao: string
            preco: number
        }
    ]
    descricao: string
    destacado: boolean
    tipo: string
    titulo: string
}

const Home = () => {
    const [restaurante, setRestaurante] = useState<Restaurant[]>([])
    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((res) => {
                setRestaurante(res)
                console.log(res)
            })
    }, [])
    console.log()
    return <MainPage items={restaurante} />
}
export default Home
