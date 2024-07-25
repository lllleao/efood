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
            @media (max-width: 400px) {
                flex-direction: column;
                row-gap: 12px;
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
        h2 {
            font-size: clamp(1em, 4vw, 1.5em);
        }
        @media (max-width: 1040px) {
            p,
            h2 {
                margin-left: 18px;
            }
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
    @media (max-width: 1040px) {
        grid-template-columns: 1fr 1fr;
        width: 90%;
        margin: 0 auto;
    }
    @media (max-width: 712px) {
        grid-template-columns: 1fr;
        width: 90%;
        margin: 0 auto;
    }
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

        @media (max-width: 1040px) {
            .prato {
                margin-bottom: 16px;
            }
            flex-direction: column;
            align-items: center;
            width: 90%;
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
