import { HeaderBar, Title } from './styles'
import backHeader from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

type Props = {
    change: boolean
}

const Header = ({ change }: Props) => {
    const { items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()
    return (
        <HeaderBar style={{ backgroundImage: `url(${backHeader})` }}>
            <div className="container">
                {change ? '' : <p>Restaurantes</p>}
                <Link to="/">
                    <img srcSet={logo} alt="logo efood" />
                </Link>
                {change ? (
                    <Title>
                        Viva experiências gastronômicas <br /> no conforto da
                        sua casa
                    </Title>
                ) : (
                    <p className="cart" onClick={() => dispatch(open())}>
                        {items.length} produto(s) no carrinho
                    </p>
                )}
            </div>
        </HeaderBar>
    )
}

export default Header
