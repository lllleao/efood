import Cardapios from '../../components/Cardapios'
import sushiBaner from '../../assets/images/sushi2.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const JapanMenu = () => {
    const { itensJapan } = useSelector((state: RootReducer) => state.cardapio)

    return (
        <Cardapios
            itens={itensJapan}
            nacionalidade="Japonesa"
            frase="Hioki Sushi"
            baner={sushiBaner}
        />
    )
}

export default JapanMenu
