import styled from 'styled-components'
import { colors } from '../../styles/global'

export const TagContainer = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;

    span {
        padding: 4px 6px;
        background-color: ${colors.orange};
        font-size: 14px;
        color: ${colors.lightWithe};
        margin-left: 8px;
        text-transform: capitalize;
    }
`
