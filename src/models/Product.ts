class Product {
  id: number
  image: string
  name: string
  grade: number
  description: string
  expandedDescription: string
  price: string

  constructor(
    id: number,
    image: string,
    name: string,
    grade: number,
    description: string,
    expandedDescription: string,
    price: string
  ) {
    this.id = id
    this.image = image
    this.name = name
    this.grade = grade
    this.description = description
    this.expandedDescription = expandedDescription
    this.price = price
  }
}

export default Product
