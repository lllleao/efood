import styled from 'styled-components'
import { colors } from '../../styles/global'

export const CartDesc = styled.div`
    margin-top: 24px;

    p {
        display: flex;
        justify-content: space-between;
        color: ${colors.withe};
        margin-bottom: 16px;
    }
`

export const CartItem = styled.li`
    display: flex;
    background-color: ${colors.lightWithe};
    padding: 12px;
    position: relative;
    margin-bottom: 16px;
    color: ${colors.orange};

    .prato {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 8px;
    }

    > div {
        h3 {
            font-size: 18px;
            margin-bottom: 16px;
        }
    }

    p {
        font-weight: 400;
    }
`

export const Lixeira = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 22px;
    height: 22px;
    cursor: pointer;
`
