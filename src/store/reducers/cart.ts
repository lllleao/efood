import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Modal } from '../../components/Cardapios'

type CartState = {
    items: Modal[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Modal>) => {
            const game = state.items.find(
                (item) => item.id === action.payload.id
            )
            if (!game) {
                state.items.push(action.payload)
            } else {
                alert('Esse item já foi adicionado ao carrinho')
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { open, close, add, remove } = cartSlice.actions

export default cartSlice.reducer
