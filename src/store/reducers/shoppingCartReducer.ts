import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Product from '../../models/Product'

type ShoppingCartState = {
  items: Product[]
  showOverlay: boolean
}

const initialState: ShoppingCartState = {
  items: [],
  showOverlay: false
}

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToShoppingCart: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
    },
    toggleShowOverlay: (state) => {
      state.showOverlay = !state.showOverlay
    }
  }
})

export const { addToShoppingCart, toggleShowOverlay } =
  shoppingCartSlice.actions
export default shoppingCartSlice.reducer
