import backFooter from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import { FooterBar, SocialLinks } from './styles'

const Footer = () => {
    return (
        <FooterBar style={{ backgroundImage: `url(${backFooter})` }}>
            <img src={logo} alt="" />
            <SocialLinks>
                <li>
                    <i className="fa-brands fa-instagram"></i>
                </li>
                <li>
                    <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                    <i className="fa-brands fa-twitter"></i>
                </li>
            </SocialLinks>
            <p>
                A efood é uma plataforma para divulgação de estabelecimentos, a
                responsabilidade pela entrega, qualidade <br /> dos produtos é
                toda do estabelecimento contratado.{' '}
            </p>
        </FooterBar>
    )
}

export default Footer
