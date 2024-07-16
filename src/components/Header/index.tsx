import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import backHeader from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

import * as S from './styles'

type Props = {
    change: boolean
}

const Header = ({ change }: Props) => {
    const { items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()
    return (
        <S.HeaderBar style={{ backgroundImage: `url(${backHeader})` }}>
            <div className="container">
                {change ? '' : <p>Restaurantes</p>}
                <Link to="/">
                    <img srcSet={logo} alt="logo efood" />
                </Link>
                {change ? (
                    <S.Title>
                        Viva experiências gastronômicas <br /> no conforto da
                        sua casa
                    </S.Title>
                ) : (
                    <p className="cart" onClick={() => dispatch(open())}>
                        {items.length} produto(s) no carrinho
                    </p>
                )}
            </div>
        </S.HeaderBar>
    )
}

export default Header
