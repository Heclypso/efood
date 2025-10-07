import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'

import Header from '../../components/Header'
import RestaurantsList from '../../containers/RestaurantsList'
import { colors } from '../../styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>()

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  if (!restaurants) {
    return (
      <BeatLoader
        style={{ position: 'absolute', top: '11.5rem', right: '48%' }}
        color={colors.tertiaryColor}
      />
    )
  }

  return (
    <>
      <Header shape="home" />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
