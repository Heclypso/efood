import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './reducers/shoppingCartReducer'

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer
  }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
