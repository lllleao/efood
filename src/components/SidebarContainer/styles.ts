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

    h3 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    .empty-cart {
        text-align: center;
        color: ${colors.withe};
        font-size: 18px;
    }
    color: ${colors.lightWithe};

    .purchaseP {
        margin-bottom: 24px;
        line-height: 22px;
    }
`
