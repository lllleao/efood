import styled from 'styled-components'
import { Button, colors } from '../../styles/global'
import { HeaderBar } from '../Header/styles'

type Props = {
    $closeModal: boolean
}

export const Section = styled.section`
    ${HeaderBar} {
        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            p {
                font-size: 18px;
                font-weight: bold;
                color: ${colors.orange};
            }
        }
    }
`

export const Container = styled.div`
    padding: 56px 0 120px;
`
export const Baner = styled.div`
    color: ${colors.withe};
    padding: 24px 0 32px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-position: center;

    .container {
        position: relative;
        font-size: 32px;
        p {
            font-weight: 100;
            margin-bottom: 152px;
        }
    }

    &::before {
        content: '';
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        inset: 0;
    }
`
export const ListCard = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
`
export const Overlay = styled.div<Props>`
    display: ${({ $closeModal }) => ($closeModal ? 'none' : 'flex')};
    align-items: center;
    position: fixed;
    inset: 0;
    font-size: 18px;
    color: ${colors.withe};

    .overlay {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .container {
        position: relative;
        z-index: 1;
        display: flex;
        padding: 32px;
        background-color: ${colors.orange};

        ${Button} {
            width: max-content;
            padding: 4px;
            margin-top: 32px;
        }

        .prato {
            margin-right: 24px;
            width: 280px;
            height: 280px;
        }
        .close {
            position: absolute;
            top: 8px;
            right: 8px;
            cursor: pointer;
        }
    }

    p {
        margin: 16px 0;
        font-size: 14px;
        line-height: 22px;

        span {
            display: block;
        }
    }
`
