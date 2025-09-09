import { useDispatch, useSelector } from 'react-redux'
import { deleteShoppingCartItem } from '../../store/reducers/shoppingCartReducer'

import * as S from './styles'

import { RootReducer } from '../../store'

import trashCam from '../../assets/icons/lixeira-de-reciclagem.svg'

import Button from '../Button'

const ShoppingCart = () => {
  const { items } = useSelector((state: RootReducer) => state.shoppingCart)
  const dispatch = useDispatch()

  const total = items.reduce(
    (acc, item) =>
      acc + Number(item.price.replace(/[^\d,.,-]/g, '').replace(',', '.')),
    0
  )

  const totalFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(total)

  return (
    <S.ShoppingCartAside>
      {items.map((item, index) => (
        <S.ShoppingCartItem key={`${item.id} - ${index}`}>
          <S.Image src={item.image} alt="Imagem do produto" />
          <div>
            <S.Name>{item.name}</S.Name>
            <S.Price>{item.price}</S.Price>
          </div>
          <S.DeleteIcon
            onClick={() => dispatch(deleteShoppingCartItem(item.id))}
            src={trashCam}
            alt="Icone de excluir o produto"
          />
        </S.ShoppingCartItem>
      ))}
      <S.ShoppingCartFooter>
        <S.ShoppingCartFooterWrapper>
          <p>Valor total</p>
          <p>{totalFormatted}</p>
        </S.ShoppingCartFooterWrapper>
        <Button value="Continuar com a entrega" $background="beige" />
      </S.ShoppingCartFooter>
    </S.ShoppingCartAside>
  )
}

export default ShoppingCart
