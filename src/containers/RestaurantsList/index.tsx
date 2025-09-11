import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import star from '../../assets/icons/star.svg'

import Button from '../../components/Button'
import Tag from '../../components/Tag'

import { RootReducer } from '../../store'
import { setSelectedRestaurant } from '../../store/reducers/restaurant'
import Restaurant from '../../models/Restaurant'

const RestaurantsList = () => {
  const { restaurants } = useSelector((state: RootReducer) => state.restaurant)
  const dispatch = useDispatch()

  const selectRestaurant = (restaurant: Restaurant) => {
    dispatch(
      setSelectedRestaurant({
        id: restaurant.id,
        image: restaurant.image,
        tags: restaurant.tags,
        name: restaurant.name,
        description: restaurant.description,
        grade: restaurant.grade,
        products: restaurant.products
      })
    )
  }

  return (
    <div className="container">
      <S.RestaurantsContainer>
        {restaurants.map((restaurant) => (
          <S.Card
            onClick={() => selectRestaurant(restaurant)}
            key={restaurant.id}
          >
            <S.ImageWrapper>
              <img src={restaurant.image} alt="Imagem do restaurante" />
              <Tag tags={restaurant.tags} />
            </S.ImageWrapper>
            <S.DetailsWrapper>
              <S.CardHeader>
                <S.Title>{restaurant.name}</S.Title>
                <S.GradeWrapper>
                  {restaurant.grade}
                  <img
                    src={star}
                    alt={`O estabelecimento possui uma nota de ${restaurant.grade} ${restaurant.grade > 1 ? 'estrelas' : 'estrela'}`}
                  />
                </S.GradeWrapper>
              </S.CardHeader>
              <S.Description>{restaurant.description}</S.Description>
              <Button to="/profile" value="Saiba mais" $background="orange" />
            </S.DetailsWrapper>
          </S.Card>
        ))}
      </S.RestaurantsContainer>
    </div>
  )
}

export default RestaurantsList
