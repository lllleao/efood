import styled from 'styled-components'
import { colors } from '../../styles/global'
import { HeaderBar } from '../Header/styles'

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
