import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import ShoppingCartElement from '../ShoppingCart'

import logo from '../../assets/images/logo.png'
import Button from '../Button'
import { RootReducer } from '../../store'
import {
  toggleShowOverlay,
  toggleShowShoppingCart
} from '../../store/reducers/shoppingCartReducer'

export type Props = {
  shape: 'profile' | 'home'
}

const Header = ({ shape }: Props) => {
  const { items, showShoppingCart } = useSelector(
    (state: RootReducer) => state.shoppingCart
  )
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
        <S.ProfileInfoWrapper>
          <S.ProfileInfo>
            <S.Category>Italiana</S.Category>
            <S.Name>La Dolce Vita Trattoria</S.Name>
          </S.ProfileInfo>
        </S.ProfileInfoWrapper>
      )}
      {showShoppingCart && <ShoppingCartElement />}
    </>
  )
}

export default Header
