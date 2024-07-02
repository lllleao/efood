import { configureStore } from '@reduxjs/toolkit'
import cardapioReducer from './reducers/cardapio'

const store = configureStore({
    reducer: {
        cardapio: cardapioReducer
    }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
