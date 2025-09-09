import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Product from '../../models/Product'

type ShoppingCartState = {
  items: Product[]
  showOverlay: boolean
  showShoppingCart: boolean
  showProductModal: boolean
}

const initialState: ShoppingCartState = {
  items: [],
  showOverlay: false,
  showShoppingCart: false,
  showProductModal: false
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
    },
    toggleShowShoppingCart: (state) => {
      state.showShoppingCart = !state.showShoppingCart
    },
    toggleShowProductModal: (state) => {
      state.showProductModal = !state.showProductModal
    }
  }
})

export const {
  addToShoppingCart,
  toggleShowOverlay,
  toggleShowShoppingCart,
  toggleShowProductModal
} = shoppingCartSlice.actions
export default shoppingCartSlice.reducer
