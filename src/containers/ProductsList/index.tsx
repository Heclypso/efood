import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'

import ProductClass from '../../models/Product'

import margerita from '../../assets/images/pizza-marguerita.png'
import closeIcon from '../../assets/icons/close.svg'

import Button from '../../components/Button'
import {
  addToShoppingCart,
  toggleShowOverlay,
  toggleShowProductModal
} from '../../store/reducers/shoppingCartReducer'
import { RootReducer } from '../../store'

const products: ProductClass[] = [
  {
    id: 1,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    expandedDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\nServe: de 2 a 3 pessoas',
    price: 'R$ 60,90',
    grade: 5
  },
  {
    id: 2,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    expandedDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\nServe: de 2 a 3 pessoas',
    price: 'R$ 60,90',
    grade: 4
  },
  {
    id: 3,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    expandedDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\nServe: de 2 a 3 pessoas',
    price: 'R$ 60,90',
    grade: 4
  },
  {
    id: 4,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    expandedDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\nServe: de 2 a 3 pessoas',
    price: 'R$ 60,90',
    grade: 4
  },
  {
    id: 5,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    expandedDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\nServe: de 2 a 3 pessoas',
    price: 'R$ 60,90',
    grade: 4
  },
  {
    id: 6,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    expandedDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\nServe: de 2 a 3 pessoas',
    price: 'R$ 60,90',
    grade: 4
  }
]

const ProductsList = () => {
  const { showProductModal } = useSelector(
    (state: RootReducer) => state.shoppingCart
  )
  const [selectedProduct, setSelectedProduct] = useState<ProductClass>()

  const priceText = `Adicionar ao carrinho - ${selectedProduct?.price}`

  const dispatch = useDispatch()

  const modalHandler = () => {
    dispatch(toggleShowProductModal())
    dispatch(toggleShowOverlay())
  }

  const shoppingCartHandler = () => {
    if (!selectedProduct) return

    dispatch(
      addToShoppingCart({
        id: selectedProduct?.id,
        image: selectedProduct?.image,
        name: selectedProduct?.name,
        description: selectedProduct?.description,
        expandedDescription: selectedProduct?.description,
        price: selectedProduct?.price,
        grade: selectedProduct?.grade
      })
    )
  }

  return (
    <div className="container">
      <S.ProductsContainer>
        {products.map((product) => (
          <S.Product key={product.id}>
            <img src={product.image} alt="Imagem do produto" />
            <S.Name>{product.name}</S.Name>
            <S.Description>{product.description}</S.Description>
            <Button
              onClick={() => {
                setSelectedProduct({
                  id: product.id,
                  image: product.image,
                  name: product.name,
                  description: product.description,
                  expandedDescription: product.expandedDescription,
                  price: product.price,
                  grade: product.grade
                })
                modalHandler()
              }}
              value="Mais detalhes"
              $background="beige"
            />
          </S.Product>
        ))}
        {showProductModal && (
          <S.Modal>
            <S.ModalImage
              src={selectedProduct?.image}
              alt="Imagem do produto"
            />
            <S.ModalContainer>
              <S.CloseModal
                onClick={() => modalHandler()}
                src={closeIcon}
                alt="Ícone de fechar"
              />
              <S.Name>{selectedProduct?.name}</S.Name>
              <S.Description>
                {selectedProduct?.expandedDescription}
              </S.Description>

              <Button
                onClick={() => {
                  modalHandler()
                  shoppingCartHandler()
                }}
                value={priceText}
                $background="beige"
              />
            </S.ModalContainer>
          </S.Modal>
        )}
      </S.ProductsContainer>
    </div>
  )
}

export default ProductsList
