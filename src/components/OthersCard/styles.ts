import styled from 'styled-components'
import { colors } from '../../styles/global'

export const Card = styled.div`
    padding: 8px;
    background-color: ${colors.orange};
    color: ${colors.lightWithe};
    font-size: 14px;

    img {
        width: 100%;
    }

    h3 {
        font-size: 18px;
        margin-top: 8px;
    }

    p {
        margin: 8px 0;
    }
`
export const Button = styled.button`
    width: 100%;
    background-color: ${colors.lightWithe};
    color: ${colors.orange};
    border: none;
    padding: 4px 0;
    cursor: pointer;
`
