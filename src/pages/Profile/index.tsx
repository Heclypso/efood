import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import ProductsList from '../../containers/ProductsList'
import Overlay from '../../components/Overlay'

import { RootReducer } from '../../store'

const Profile = () => {
  const { id } = useParams()

  const [products, setProducts] = useState<Product[]>([])

  const { showOverlay } = useSelector(
    (state: RootReducer) => state.shoppingCart
  )

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.cardapio))
  }, [id])

  return (
    <>
      {showOverlay && <Overlay />}
      <Header shape="profile" />
      <ProductsList products={products} />
    </>
  )
}

export default Profile
