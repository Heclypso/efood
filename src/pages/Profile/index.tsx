import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import ProductsList from '../../containers/ProductsList'
import Overlay from '../../components/Overlay'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Profile = () => {
  const { showOverlay } = useSelector(
    (state: RootReducer) => state.shoppingCart
  )

  const { selectedRestaurant } = useSelector(
    (state: RootReducer) => state.restaurant
  )

  const navigate = useNavigate()

  useEffect(() => {
    selectedRestaurant.id === 0 ? navigate('/') : ''
  }, [navigate, selectedRestaurant])

  return (
    <>
      {showOverlay && <Overlay />}
      <Header shape="profile" />
      <ProductsList />
    </>
  )
}

export default Profile
