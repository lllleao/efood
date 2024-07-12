import lixeira from '../../assets/images/lixeira.png'
import { CartItem, Lixeira, CartContainer, SideBar } from './styles'
import { Button } from '../../styles/global'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../OthersCard'
const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const sumTot = () => {
        return items.reduce((acum, val) => {
            return (acum += val.preco)
        }, 0)
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <div onClick={() => dispatch(close())} />
            <SideBar>
                <ul>
                    {items.map((item) => (
                        <CartItem key={item.id}>
                            <img
                                className="prato"
                                srcSet={item.foto}
                                alt={item.nome}
                            />
                            <div>
                                <h3>{item.nome}</h3>
                                <p>{formatPrice(item.preco)}</p>
                            </div>
                            <Lixeira>
                                <img
                                    className="lixeira"
                                    srcSet={lixeira}
                                    alt="lixeira"
                                    onClick={() => dispatch(remove(item.id))}
                                />
                            </Lixeira>
                        </CartItem>
                    ))}
                </ul>
                <div>
                    <p>
                        <span>Valor total</span>
                        <span>{formatPrice(sumTot())}</span>
                    </p>
                    <Button>Continuar com a entrega</Button>
                </div>
            </SideBar>
        </CartContainer>
    )
}

export default Cart
