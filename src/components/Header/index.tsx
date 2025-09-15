import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { colors } from '../../styles'

import ShoppingCartElement from '../ShoppingCart'

import logo from '../../assets/images/logo.png'

import Button from '../Button'

import { RootReducer } from '../../store'
import {
  toggleShowOverlay,
  toggleShowShoppingCart
} from '../../store/reducers/shoppingCartReducer'
import { Restaurants } from '../../pages/Home'

export type Props = {
  shape: 'profile' | 'home'
}

const Header = ({ shape }: Props) => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurants>()

  const { items, showShoppingCart } = useSelector(
    (state: RootReducer) => state.shoppingCart
  )

  useEffect(() => {
    if (id != undefined) {
      fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => setRestaurant(res))
    }
  }, [id])

  const dispatch = useDispatch()

  const shoppingCartHandler = () => {
    dispatch(toggleShowShoppingCart())
    dispatch(toggleShowOverlay())
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
            <S.ShoppingCart onClick={() => shoppingCartHandler()}>
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
      {shape === 'profile' && (
        <S.ProfileInfoWrapper
          style={{
            background: `linear-gradient(${colors.bannerOverlayColor}), url(${restaurant?.capa}) no-repeat center center / cover`
          }}
        >
          <S.ProfileInfo>
            <S.Category>{restaurant?.tipo}</S.Category>
            <S.Name>{restaurant?.titulo}</S.Name>
          </S.ProfileInfo>
        </S.ProfileInfoWrapper>
      )}
      {showShoppingCart && <ShoppingCartElement />}
    </>
  )
}

export default Header
