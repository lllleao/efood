import styled from 'styled-components'
import { colors } from '../../styles/global'
import { Link } from 'react-router-dom'

export const Card = styled.div`
    color: ${colors.orange};
    position: relative;
    > img {
        width: 100%;
        height: 216px;
        object-fit: cover;
    }
`
export const CardInfo = styled.div`
    border: 1px solid ${colors.orange};
    margin-top: -5px;
    padding: 12px;
    font-size: 14px;
    font-weight: bold;

    p {
        margin: 16px 0;
        line-height: 22px;
        font-weight: normal;
    }

    h3 {
        font-size: 18px;
    }
`
export const TitleField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        font-size: 18px;

        img {
            margin-left: 8px;
        }
    }
`
export const More = styled(Link)`
    background-color: ${colors.orange};
    color: ${colors.lightWithe};
    padding: 4px 6px;
    font-size: 14px;
    text-decoration: none;
`
