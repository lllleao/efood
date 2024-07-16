import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Checkout from '../../pages/Checkout'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice, sumTot } from '../../utils'

import lixeira from '../../assets/images/lixeira.png'

import { CartContainer, SideBar } from '../SidebarContainer/styles'
import * as S from './styles'
import { Button } from '../../styles/global'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()
    const [buy, setBuy] = useState(true)

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <div onClick={() => dispatch(close())} />
            <SideBar>
                <>
                    {buy ? (
                        items.length > 0 ? (
                            <>
                                <ul>
                                    {items.map((item) => (
                                        <S.CartItem key={item.id}>
                                            <img
                                                className="prato"
                                                srcSet={item.foto}
                                                alt={item.nome}
                                            />
                                            <div>
                                                <h3>{item.nome}</h3>
                                                <p>{formatPrice(item.preco)}</p>
                                            </div>
                                            <S.Lixeira>
                                                <img
                                                    className="lixeira"
                                                    srcSet={lixeira}
                                                    alt="lixeira"
                                                    onClick={() =>
                                                        dispatch(
                                                            remove(item.id)
                                                        )
                                                    }
                                                />
                                            </S.Lixeira>
                                        </S.CartItem>
                                    ))}
                                </ul>
                                <S.CartDesc>
                                    <p>
                                        <span>Valor total</span>
                                        <span>
                                            {formatPrice(sumTot(items))}
                                        </span>
                                    </p>
                                    <Button
                                        type="button"
                                        onClick={() => setBuy(false)}
                                    >
                                        Continuar com a entrega
                                    </Button>
                                </S.CartDesc>
                            </>
                        ) : (
                            <p className="empty-cart">
                                Adicione algum pedido para continuar com a
                                compra
                            </p>
                        )
                    ) : (
                        <Checkout backBuy={() => setBuy(true)} />
                    )}
                </>
            </SideBar>
        </CartContainer>
    )
}

export default Cart
