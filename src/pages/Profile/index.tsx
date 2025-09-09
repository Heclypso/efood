import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import ProductsList from '../../containers/ProductsList'
import Overlay from '../../components/Overlay'
import { RootReducer } from '../../store'

const Profile = () => {
  const { showOverlay } = useSelector(
    (state: RootReducer) => state.shoppingCart
  )
  return (
    <>
      {showOverlay && <Overlay />}
      <Header shape="profile" />
      <ProductsList />
    </>
  )
}

export default Profile
