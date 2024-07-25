import styled from 'styled-components'

export const Main = styled.main`
    padding: 80px 0 120px;
`
export const MenuList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;
    @media (max-width: 1040px) {
        grid-template-columns: 1fr;
        width: 90%;
        margin: 0 auto;
    }
`
