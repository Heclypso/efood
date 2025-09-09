import Product from './Product'

class Restaurant {
  id: number
  image: string
  name: string
  description: string
  grade: number
  tags: string[]
  products: Product[]

  constructor(
    id: number,
    image: string,
    name: string,
    description: string,
    grade: number,
    tags: string[],
    products: Product[]
  ) {
    this.id = id
    this.image = image
    this.name = name
    this.description = description
    this.grade = grade
    this.tags = tags
    this.products = products
  }
}

export default Restaurant
