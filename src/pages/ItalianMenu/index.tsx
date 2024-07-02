import Cardapios from '../../components/Cardapios'
import pastaBaner from '../../assets/images/pastaBanner.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ItalianMenu = () => {
    const { itensItalian } = useSelector((state: RootReducer) => state.cardapio)

    return (
        <Cardapios
            itens={itensItalian}
            nacionalidade="Italiana"
            frase="La Dolce Vita Trattoria"
            baner={pastaBaner}
        />
    )
}

export default ItalianMenu
