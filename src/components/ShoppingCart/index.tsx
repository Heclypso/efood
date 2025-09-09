import { useSelector } from 'react-redux'
import {
  DeleteIcon,
  Image,
  Name,
  Price,
  ShoppingCartAside,
  ShoppingCartItem
} from './styles'
import { RootReducer } from '../../store'

import trashCam from '../../assets/icons/lixeira-de-reciclagem.svg'

const ShoppingCart = () => {
  const { items } = useSelector((state: RootReducer) => state.shoppingCart)

  return (
    <ShoppingCartAside>
      {items.map((item) => (
        <ShoppingCartItem key={item.id}>
          <Image src={item.image} alt="Imagem do produto" />
          <div>
            <Name>{item.name}</Name>
            <Price>{item.price}</Price>
          </div>
          <DeleteIcon src={trashCam} alt="Icone de excluir o produto" />
        </ShoppingCartItem>
      ))}
    </ShoppingCartAside>
  )
}

export default ShoppingCart
