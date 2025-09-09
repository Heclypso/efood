type Restaurant = {
  id: number
  image: string
  name: string
  description: string
  grade: number
  tags: string[]
}

import hiokiImage from '../../assets/images/hioki-sushi.png'
import laDolceImage from '../../assets/images/la-dolce-vita-trattoria.png'

import star from '../../assets/icons/star.svg'

import * as S from './styles'
import Button from '../../components/Button'
import Tag from '../../components/Tag'

const restaurants: Restaurant[] = [
  {
    id: 1,
    image: hiokiImage,
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    grade: 4.9,
    tags: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    image: laDolceImage,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    grade: 4.6,
    tags: ['Italiana']
  },
  {
    id: 3,
    image: laDolceImage,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    grade: 4.6,
    tags: ['Italiana']
  },
  {
    id: 4,
    image: laDolceImage,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    grade: 4.6,
    tags: ['Italiana']
  },
  {
    id: 5,
    image: laDolceImage,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    grade: 4.6,
    tags: ['Italiana']
  },
  {
    id: 6,
    image: laDolceImage,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    grade: 4.6,
    tags: ['Italiana']
  }
]

const RestaurantsList = () => (
  <div className="container">
    <S.RestaurantsContainer>
      {restaurants.map((restaurant) => (
        <S.Card key={restaurant.id}>
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

export default RestaurantsList
