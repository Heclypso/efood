import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './reducers/shoppingCartReducer'
import restaurantReducer from './reducers/restaurant'

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    restaurant: restaurantReducer
  }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
