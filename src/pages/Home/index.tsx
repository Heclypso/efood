import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import RestaurantsList from '../../containers/RestaurantsList'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header shape="home" />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
