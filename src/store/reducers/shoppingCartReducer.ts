import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Product = {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: string
  porcao: string
}

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
    },
    deleteShoppingCartItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((i) => i.id === action.payload)

      state.items.splice(index, 1)
    },
    deleteAllShoppingCartItem: (state) => {
      state.items = []
    }
  }
})

export const {
  addToShoppingCart,
  toggleShowOverlay,
  toggleShowShoppingCart,
  toggleShowProductModal,
  deleteShoppingCartItem,
  deleteAllShoppingCartItem
} = shoppingCartSlice.actions
export default shoppingCartSlice.reducer
