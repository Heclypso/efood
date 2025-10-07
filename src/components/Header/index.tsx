import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import ShoppingCartElement from '../ShoppingCart'

import logo from '../../assets/images/logo.png'
import Button from '../Button'

import { useGetRestaurantQuery } from '../../services/api'

import {
  toggleShowOverlay,
  toggleShowShoppingCart
} from '../../store/reducers/shoppingCartReducer'

import { RootReducer } from '../../store'

import { colors } from '../../styles'
import * as S from './styles'

export type Props = {
  shape: 'profile' | 'home'
}

type RestaurantParams = {
  id: string
}

const Header = ({ shape }: Props) => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant } = useGetRestaurantQuery(id != undefined ? id : '1')

  const { items, showShoppingCart } = useSelector(
    (state: RootReducer) => state.shoppingCart
  )

  const dispatch = useDispatch()

  const shoppingCartHandler = () => {
    dispatch(toggleShowShoppingCart())
    dispatch(toggleShowOverlay())
  }

  const formatFoodType = (foodType: string) => {
    if (foodType) {
      return foodType.charAt(0).toUpperCase() + foodType.slice(1)
    }
  }

  return (
    <>
      <S.HeaderContainer shape={shape}>
        <S.ProfileHeaderWrapper shape={shape}>
          {shape === 'profile' && (
            <Button to="/" value="Restaurantes" $background="transparent" />
          )}
          <img src={logo} alt="Logo da efood" />
          {shape === 'profile' && (
            <S.ShoppingCart onClick={shoppingCartHandler}>
              {items.length} - Produtos no carrinho
            </S.ShoppingCart>
          )}
        </S.ProfileHeaderWrapper>
        {shape === 'home' && (
          <S.Title>
            Viva experiências gastronômicas no conforto da sua casa
          </S.Title>
        )}
      </S.HeaderContainer>
      {shape === 'profile' && restaurant && (
        <S.ProfileInfoWrapper
          style={{
            background: `linear-gradient(${colors.bannerOverlayColor}), url(${restaurant.capa}) no-repeat center center / cover`
          }}
        >
          <S.ProfileInfo>
            <S.Category>{formatFoodType(restaurant.tipo)}</S.Category>
            <S.Name>{restaurant?.titulo}</S.Name>
          </S.ProfileInfo>
        </S.ProfileInfoWrapper>
      )}
      {showShoppingCart && <ShoppingCartElement />}
    </>
  )
}

export default Header
