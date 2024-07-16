import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import api from '../service/api'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
