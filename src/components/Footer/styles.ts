import styled from 'styled-components'
import { colors } from '../../styles/global'

export const FooterBar = styled.footer`
    padding: 40px 0;
    text-align: center;

    p {
        color: ${colors.orange};
        font-size: 10px;
    }
`
export const SocialLinks = styled.ul`
    margin: 32px 0 80px;
    display: flex;
    justify-content: center;

    li {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: ${colors.orange};
        color: ${colors.withe};
        margin-right: 8px;
        i {
            line-height: 30px;
        }
    }
`
