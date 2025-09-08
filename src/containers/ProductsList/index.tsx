import { Description, Name, Product, ProductsContainer } from './styles'

type Product = {
  id: number
  image: string
  name: string
  description: string
}

import margerita from '../../assets/images/pizza-marguerita.png'
import Button from '../../components/Button'

const products: Product[] = [
  {
    id: 1,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: margerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const ProductsList = () => (
  <div className="container">
    <ProductsContainer>
      {products.map((product) => (
        <Product key={product.id}>
          <img src={product.image} alt="Imagem do produto" />
          <Name>{product.name}</Name>
          <Description>{product.description}</Description>
          <Button to="" value="Mais detalhes" background="beige" />
        </Product>
      ))}
    </ProductsContainer>
  </div>
)

export default ProductsList
