import styled from 'styled-components'
import { colors } from '../../styles/global'

export const HeaderBar = styled.header`
    padding: 64px 0 40px;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`
export const Title = styled.h1`
    font-size: 36px;
    color: ${colors.orange};
    margin-top: 136px;
`
