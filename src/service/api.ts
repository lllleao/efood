import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
    id: number
    price: number
}

type PurchaseId = {
    orderId: string
}

type Purchase = {
    products: Product[]
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: number
            complement: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
    }),
    endpoints: (builder) => ({
        purchase: builder.mutation<PurchaseId, Purchase>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const { usePurchaseMutation } = api
export default api
