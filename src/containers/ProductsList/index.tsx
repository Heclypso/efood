import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'

import ProductClass from '../../models/Product'

import closeIcon from '../../assets/icons/close.svg'

import Button from '../../components/Button'
import {
  addToShoppingCart,
  toggleShowOverlay,
  toggleShowProductModal
} from '../../store/reducers/shoppingCartReducer'
import { RootReducer } from '../../store'

const ProductsList = () => {
  const { products } = useSelector(
    (state: RootReducer) => state.restaurant.selectedRestaurant
  )

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
