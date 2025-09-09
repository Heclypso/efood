import { useState } from 'react'
import {
  CloseModal,
  Description,
  Modal,
  ModalContainer,
  ModalImage,
  Name,
  Product,
  ProductsContainer
} from './styles'

type Product = {
  id: number
  image: string
  name: string
  description: string
  expandedDescription: string
}

import margerita from '../../assets/images/pizza-marguerita.png'
import closeIcon from '../../assets/icons/close.svg'

import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { toggleShowOverlay } from '../../store/reducers/shoppingCartReducer'

const products: Product[] = [
  {
    id: 1,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    expandedDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\nServe: de 2 a 3 pessoas'
  },
  {
    id: 2,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    expandedDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\nServe: de 2 a 3 pessoas'
  },
  {
    id: 3,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    expandedDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\nServe: de 2 a 3 pessoas'
  },
  {
    id: 4,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    expandedDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\nServe: de 2 a 3 pessoas'
  },
  {
    id: 5,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    expandedDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\n Serve: de 2 a 3 pessoas'
  },
  {
    id: 6,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    expandedDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. \n\n Serve: de 2 a 3 pessoas'
  }
]

const ProductsList = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product>()

  const price = 'R$ 60,90'
  const priceText = `Adicionar ao carrinho - ${price}`

  const dispatch = useDispatch()

  const modalHandler = () => {
    setShowModal((prev) => !prev)
    dispatch(toggleShowOverlay())
  }

  return (
    <div className="container">
      <ProductsContainer>
        {products.map((product) => (
          <Product key={product.id}>
            <img src={product.image} alt="Imagem do produto" />
            <Name>{product.name}</Name>
            <Description>{product.description}</Description>
            <Button
              onClick={() => {
                setSelectedProduct({
                  id: product.id,
                  image: product.image,
                  name: product.name,
                  description: product.description,
                  expandedDescription: product.expandedDescription
                })
                modalHandler()
              }}
              value="Mais detalhes"
              $background="beige"
            />
          </Product>
        ))}
        {showModal && (
          <Modal>
            <ModalImage src={selectedProduct?.image} alt="Imagem do produto" />
            <ModalContainer>
              <CloseModal
                onClick={() => modalHandler()}
                src={closeIcon}
                alt="Ícone de fechar"
              />
              <Name>{selectedProduct?.name}</Name>
              <Description>{selectedProduct?.expandedDescription}</Description>

              <Button
                onClick={() => modalHandler()}
                value={priceText}
                $background="beige"
              />
            </ModalContainer>
          </Modal>
        )}
      </ProductsContainer>
    </div>
  )
}

export default ProductsList
