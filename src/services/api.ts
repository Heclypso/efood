import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type PurchaseProduct = {
  id: number
  price: number
}

type PurchasePayload = {
  products: PurchaseProduct[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: string
      complement?: string
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

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  usePurchaseMutation
} = api

export default api
