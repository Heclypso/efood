export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Product[]) => {
  return items.reduce((accumulator, currentItem) => {
    return (accumulator += currentItem.preco)
  }, 0)
}
