import { useEffect, useState } from 'react'
import MainPage from '../../containers/MainPage'

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
