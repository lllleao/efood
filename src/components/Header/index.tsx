import { HeaderBar, Title } from './styles'
import backHeader from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

type Props = {
    change: boolean
}

const Header = ({ change }: Props) => {
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
                    <p>0 produto(s) no carrinho</p>
                )}
            </div>
        </HeaderBar>
    )
}

export default Header
