import styled from 'styled-components'
import { colors } from '../../styles/global'

export const HeaderBar = styled.header`
    padding: 64px 0 40px;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .cart {
            cursor: pointer;
        }
    }
    p {
        margin: 0 18px;
    }
    @media (max-width: 1040px) {
        padding: 20px 0;
    }
`
export const Title = styled.h1`
    font-size: clamp(18px, 4vw, 36px);
    color: ${colors.orange};
    margin-top: 136px;
`
