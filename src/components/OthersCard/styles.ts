import styled from 'styled-components'
import { colors } from '../../styles/global'

export const Card = styled.div`
    padding: 8px;
    background-color: ${colors.orange};
    color: ${colors.lightWithe};
    font-size: 14px;
    position: relative;
    max-height: 336px;

    img {
        width: 100%;
        height: 168px;
    }

    h3 {
        font-size: 18px;
        margin-top: 8px;
    }

    p {
        margin: 8px 0;
    }
`
