import styled from 'styled-components'
import { colors } from '../../styles/global'

export const CartContainer = styled.div`
    position: fixed;
    inset: 0;
    display: none;

    &.is-open {
        display: flex;
    }

    > div {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.7);
    }
`

export const SideBar = styled.aside`
    position: absolute;
    z-index: 1;
    right: 0;
    max-width: 360px;
    width: 100%;
    height: 100%;
    padding: 32px 8px 0 8px;
    background-color: ${colors.orange};
    font-size: 14px;
    font-weight: bold;
    color: ${colors.orange};

    > div {
        margin-top: 24px;

        p {
            display: flex;
            justify-content: space-between;
            color: ${colors.branco};
            margin-bottom: 16px;
        }
    }
`

export const CartItem = styled.li`
    display: flex;
    background-color: ${colors.lightWithe};
    padding: 12px;
    position: relative;
    margin-bottom: 16px;

    .prato {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 8px;
    }

    h3 {
        font-size: 18px;
        margin-bottom: 16px;
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
