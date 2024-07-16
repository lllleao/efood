import { useDispatch } from 'react-redux'
import { Button } from '../../styles/global'
import { clear, close } from '../../store/reducers/cart'

type Props = {
    orderId: string
    backBuy: () => void
}

const PurchaseComfirm = ({ orderId, backBuy }: Props) => {
    const dispatch = useDispatch()
    const finish = () => {
        dispatch(clear())
        dispatch(close())
        backBuy()
    }
    return (
        <div>
            <h3>Pedido realizado - {orderId}</h3>
            <p className="purchaseP">
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
                <br />
                <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
                <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
            </p>
            <Button onClick={finish} type="button">
                Concluir
            </Button>
        </div>
    )
}

export default PurchaseComfirm
