import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import shoppingCartReducer from './reducers/shoppingCartReducer'

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
