import Button from '../../components/Button'
import Tag from '../../components/Tag'

import star from '../../assets/icons/star.svg'

import * as S from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  const setTags = (featured: boolean, type: string) => {
    const formatedFoodType = type.charAt(0).toUpperCase() + type.slice(1)

    if (featured === true) {
      return ['Destaque da semana', `${formatedFoodType}`]
    } else {
      return [`${formatedFoodType}`]
    }
  }

  const formatDescription = (description: string) => {
    if (description.length > 245) {
      return description.slice(0, 245) + '...'
    }
    return description
  }

  return (
    <div className="container">
      <S.RestaurantsContainer>
        {restaurants.map((restaurant) => (
          <S.Card key={restaurant.id}>
            <S.ImageWrapper>
              <img src={restaurant.capa} alt="Imagem do restaurante" />
              <Tag tags={setTags(restaurant.destacado, restaurant.tipo)} />
            </S.ImageWrapper>
            <S.DetailsWrapper>
              <S.CardHeader>
                <S.Title>{restaurant.titulo}</S.Title>
                <S.GradeWrapper>
                  {restaurant.avaliacao}
                  <img
                    src={star}
                    alt={`O estabelecimento possui uma nota de ${restaurant.avaliacao} ${restaurant.avaliacao > 1 ? 'estrelas' : 'estrela'}`}
                  />
                </S.GradeWrapper>
              </S.CardHeader>
              <S.Description>
                {formatDescription(restaurant.descricao)}
              </S.Description>
              <Button
                to={`/restaurantes/${restaurant.id}`}
                value="Saiba mais"
                $background="orange"
              />
            </S.DetailsWrapper>
          </S.Card>
        ))}
      </S.RestaurantsContainer>
    </div>
  )
}

export default RestaurantsList
