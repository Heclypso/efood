import star from '../../assets/icons/star.svg'

import * as S from './styles'
import Button from '../../components/Button'
import Tag from '../../components/Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setSelectedRestaurant } from '../../store/reducers/restaurant'

const RestaurantsList = () => {
  const { restaurants } = useSelector((state: RootReducer) => state.restaurant)
  const dispatch = useDispatch()

  return (
    <div className="container">
      <S.RestaurantsContainer>
        {restaurants.map((restaurant) => (
          <S.Card
            onClick={() =>
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
                  {restaurant.grade} <img src={star} alt="" />
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
