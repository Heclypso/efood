import { useState } from 'react'
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

  const [showShoppingCart, setShowShoppingCart] = useState(true)
  const [showDeliveryForm, setShowDeliveryForm] = useState(false)
  const [showPaymentForm, setShowPaymentForm] = useState(false)

  return (
    <S.ShoppingCartAside>
      {showShoppingCart && (
        <>
          {items.map((item, index) => (
            <S.ShoppingCartItem key={`${item.id}-${index}`}>
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
            <Button
              onClick={() => {
                setShowDeliveryForm(true)
                setShowShoppingCart(false)
              }}
              value="Continuar com a entrega"
              $background="beige"
            />
          </S.ShoppingCartFooter>
        </>
      )}

      {showDeliveryForm && (
        <S.Form>
          <S.Title>Entrega</S.Title>

          <S.Label htmlFor="addressee">Quem irá receber</S.Label>
          <S.Input type="text" id="addressee" name="addressee" />

          <S.Label htmlFor="address">Endereço</S.Label>
          <S.Input type="text" id="address" name="address" />

          <S.Label htmlFor="city">Cidade</S.Label>
          <S.Input type="text" id="city" name="city" />

          <S.InputWrapper>
            <div>
              <S.Label htmlFor="cep">CEP</S.Label>
              <S.Input type="number" id="cep" name="cep" />
            </div>

            <div>
              <S.Label htmlFor="number">Número</S.Label>
              <S.Input type="number" id="number" name="number" />
            </div>
          </S.InputWrapper>

          <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
          <S.Input type="text" id="complement" name="complement" />

          <Button
            onClick={() => {
              setShowPaymentForm(true)
              setShowDeliveryForm(false)
            }}
            $background="beige"
            value="Continuar com o pagamento"
          />
          <Button
            onClick={() => {
              setShowShoppingCart(true)
              setShowDeliveryForm(false)
            }}
            $background="beige"
            value="Voltar para o carrinho"
          />
        </S.Form>
      )}

      {showPaymentForm && (
        <S.Form>
          <S.Title>Pagamento - Valor a pagar {totalFormatted}</S.Title>

          <S.Label htmlFor="addressee">Nome no cartão</S.Label>
          <S.Input type="text" id="addressee" name="addressee" />

          <S.InputWrapper>
            <div>
              <S.Label htmlFor="address">Número do cartão</S.Label>
              <S.Input type="text" id="address" name="address" />
            </div>

            <div>
              <S.Label htmlFor="city">CVV</S.Label>
              <S.Input type="text" id="city" name="city" />
            </div>
          </S.InputWrapper>

          <S.InputWrapper>
            <div>
              <S.Label htmlFor="cep">Mês de vencimento</S.Label>
              <S.Input type="number" id="cep" name="cep" />
            </div>

            <div>
              <S.Label htmlFor="number">Ano de vencimento</S.Label>
              <S.Input type="number" id="number" name="number" />
            </div>
          </S.InputWrapper>

          <Button $background="beige" value="Finalizar pagamento" />
          <Button
            onClick={() => {
              setShowShoppingCart(false)
              setShowDeliveryForm(true)
              setShowPaymentForm(false)
            }}
            $background="beige"
            value="Voltar para a edição de endereço"
          />
        </S.Form>
      )}
    </S.ShoppingCartAside>
  )
}

export default ShoppingCart
