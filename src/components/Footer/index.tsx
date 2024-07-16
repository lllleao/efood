import backFooter from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import * as S from './styles'

const Footer = () => {
    return (
        <S.FooterBar style={{ backgroundImage: `url(${backFooter})` }}>
            <img src={logo} alt="" />
            <S.SocialLinks>
                <li>
                    <i className="fa-brands fa-instagram"></i>
                </li>
                <li>
                    <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                    <i className="fa-brands fa-twitter"></i>
                </li>
            </S.SocialLinks>
            <p>
                A efood é uma plataforma para divulgação de estabelecimentos, a
                responsabilidade pela entrega, qualidade <br /> dos produtos é
                toda do estabelecimento contratado.{' '}
            </p>
        </S.FooterBar>
    )
}

export default Footer
