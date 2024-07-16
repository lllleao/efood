import styled from 'styled-components'
import { colors } from '../../styles/global'

type Props = {
    $numCard?: string
}

export const CheckoutContainer = styled.form`
    color: ${colors.lightWithe};
    font-size: 14px;

    .continue {
        margin: 16px 0 8px;
    }
`
export const InputField = styled.div`
    input {
        display: block;
        margin: 8px 0;
        width: 100%;
        padding: 8px;
        background-color: ${colors.lightWithe};
        border: none;
        outline: none;
        border: 2px solid ${colors.lightWithe};

        &.error {
            border: 2px solid red;
        }
    }
`
export const InputFlex = styled(InputField)<Props>`
    display: grid;
    grid-template-columns: ${({ $numCard }) => $numCard || '155px'} auto;
    column-gap: 30px;
    &.error {
        input {
            border: 1px solid red;
        }
    }
`
