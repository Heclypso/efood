import { useDispatch, useSelector } from 'react-redux'
import { OverlayElement } from './styles'
import {
  toggleShowOverlay,
  toggleShowProductModal,
  toggleShowShoppingCart
} from '../../store/reducers/shoppingCartReducer'
import { RootReducer } from '../../store'

const Overlay = () => {
  const dispatch = useDispatch()
  const { showProductModal, showShoppingCart } = useSelector(
    (state: RootReducer) => state.shoppingCart
  )

  const overlayHandler = () => {
    dispatch(toggleShowOverlay())
    if (showProductModal === true) {
      dispatch(toggleShowProductModal())
    }

    if (showShoppingCart === true) {
      dispatch(toggleShowShoppingCart())
    }
  }

  return <OverlayElement onClick={() => overlayHandler()} />
}
export default Overlay
