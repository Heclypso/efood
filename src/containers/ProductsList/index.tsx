import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'

import Button from '../../components/Button'

import closeIcon from '../../assets/icons/close.svg'

import { parseToBrl } from '../../utils'

import {
  addToShoppingCart,
  toggleShowOverlay,
  toggleShowProductModal
} from '../../store/reducers/shoppingCartReducer'
import { RootReducer } from '../../store'

import { colors, LoaderContainer } from '../../styles'
import * as S from './styles'

type Props = {
  products: Product[]
}

const ProductsList = ({ products }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const modalRef = useRef<HTMLDivElement>(null)

  const formatDescription = (description: string) => {
    if (description.length > 129) {
      return description.slice(0, 129) + '...'
    }
    return description
  }

  const { showProductModal } = useSelector(
    (state: RootReducer) => state.shoppingCart
  )

  const dispatch = useDispatch()

  const modalHandler = () => {
    dispatch(toggleShowProductModal())
    dispatch(toggleShowOverlay())
  }

  const shoppingCartHandler = (product: Product) => {
    dispatch(
      addToShoppingCart({
        id: product?.id,
        foto: product?.foto,
        nome: product?.nome,
        descricao: product?.descricao,
        preco: product.preco,
        porcao: product?.porcao
      })
    )
  }

  useEffect(() => {
    modalRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    })
  })

  if (products.length === 0) {
    return (
      <LoaderContainer>
        <BeatLoader color={colors.tertiaryColor} />
      </LoaderContainer>
    )
  }

  return (
    <div className="container">
      <S.ProductsContainer>
        {products.map((product) => (
          <S.Product key={product.id}>
            <img src={product.foto} alt="Imagem do produto" />
            <S.Name>{product.nome}</S.Name>
            <S.Description>
              {formatDescription(product.descricao)}
            </S.Description>
            <Button
              onClick={() => {
                modalHandler()
                setSelectedProduct(product)
              }}
              value="Mais detalhes"
              $background="beige"
            />
          </S.Product>
        ))}
        {showProductModal && selectedProduct && (
          <S.Modal ref={modalRef}>
            <S.ModalImage src={selectedProduct?.foto} alt="Imagem do produto" />
            <S.ModalContainer>
              <S.CloseModal
                onClick={modalHandler}
                src={closeIcon}
                alt="Ícone de fechar"
              />
              <S.Name>{selectedProduct?.nome}</S.Name>
              <S.Description>
                {selectedProduct?.descricao +
                  `\n\n Serve: de ${selectedProduct.porcao}`}
              </S.Description>

              <Button
                onClick={() => {
                  modalHandler()
                  shoppingCartHandler(selectedProduct)
                }}
                value={`Adicionar ao carrinho - ${parseToBrl(selectedProduct?.preco)}`}
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
