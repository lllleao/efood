import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`
export const colors = {
    withe: '#fff',
    orange: '#e66767',
    lightWithe: '#ffebd9',
    branco: '#fff'
}

export const Button = styled.button`
    width: 100%;
    background-color: ${colors.lightWithe};
    color: ${colors.orange};
    border: none;
    padding: 4px 0;
    cursor: pointer;
`
