import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteAllShoppingCartItem,
  deleteShoppingCartItem,
  toggleShowOverlay,
  toggleShowShoppingCart
} from '../../store/reducers/shoppingCartReducer'

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
  const [showSuccesMessage, setShowSuccesMessage] = useState(false)

  const sucessText = `Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.

    Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.

    Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.

    Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
  `

  const ORDER_ID = Math.random()

  const [addressee, setAddressee] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [cep, setCep] = useState('')
  const [number, setNumber] = useState('')

  const deliveryHandler = () => {
    if (!addressee.trim()) {
      alert('Preencha o campo destinatário')
      return
    }

    if (!address.trim()) {
      alert('Preencha o campo endereço')
      return
    }

    if (!city.trim()) {
      alert('Preencha o campo cidade')
      return
    }

    if (!cep.trim()) {
      alert('Preencha o campo CEP')
      return
    }

    if (!number.trim()) {
      alert('Preencha o campo numero')
      return
    }
    setShowPaymentForm(true)
    setShowDeliveryForm(false)
  }

  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [cardDueMonth, setCardDueMonth] = useState('')
  const [cardDueYear, setCardDueYear] = useState('')

  const paymentHandler = () => {
    if (!cardName.trim()) {
      alert('Preencha o campo Nome no cartão')
      return
    }

    if (!cardNumber.trim()) {
      alert('Preencha o campo Número do cartão')
      return
    }

    if (!cvv.trim()) {
      alert('Preencha o campo cvv')
      return
    }

    if (!cardDueMonth.trim()) {
      alert('Preencha o campo Mês de vencimento')
      return
    }

    if (!cardDueYear.trim()) {
      alert('Preencha o campo Ano de vencimento')
      return
    }

    setShowPaymentForm(false)
    setShowSuccesMessage(true)
  }

  const sucessHandler = () => {
    setShowShoppingCart(true)
    setShowDeliveryForm(false)
    setShowPaymentForm(false)
    setShowSuccesMessage(false)
    dispatch(toggleShowShoppingCart())
    dispatch(toggleShowOverlay())
    dispatch(deleteAllShoppingCartItem())
  }

  return (
    <S.ShoppingCartAside>
      {showShoppingCart && (
        <>
          {showShoppingCart && items.length === 0 && (
            <S.Title>Carrinho vazio, adicione algum item.</S.Title>
          )}
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

          {items.length != 0 && (
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
          )}
        </>
      )}

      {showDeliveryForm && (
        <S.Form>
          <S.Title>Entrega</S.Title>

          <S.Label htmlFor="addressee">Quem irá receber</S.Label>
          <S.Input
            onChange={(e) => setAddressee(e.target.value)}
            required
            type="text"
            id="addressee"
            name="addressee"
          />

          <S.Label htmlFor="address">Endereço</S.Label>
          <S.Input
            onChange={(e) => setAddress(e.target.value)}
            required
            type="text"
            id="address"
            name="address"
          />

          <S.Label htmlFor="city">Cidade</S.Label>
          <S.Input
            onChange={(e) => setCity(e.target.value)}
            required
            type="text"
            id="city"
            name="city"
          />

          <S.InputWrapper>
            <div>
              <S.Label htmlFor="cep">CEP</S.Label>
              <S.Input
                onChange={(e) => setCep(e.target.value)}
                required
                type="text"
                id="cep"
                name="cep"
                maxLength={8}
              />
            </div>

            <div>
              <S.Label htmlFor="number">Número</S.Label>
              <S.Input
                onChange={(e) => setNumber(e.target.value)}
                required
                type="text"
                id="number"
                name="number"
                maxLength={11}
              />
            </div>
          </S.InputWrapper>

          <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
          <S.Input type="text" id="complement" name="complement" />

          <Button
            onClick={() => deliveryHandler()}
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

          <S.Label htmlFor="name">Nome no cartão</S.Label>
          <S.Input
            onChange={(e) => setCardName(e.target.value)}
            required
            type="text"
            id="name"
            name="name"
            maxLength={25}
          />

          <S.InputWrapper>
            <div>
              <S.Label htmlFor="card-number">Número do cartão</S.Label>
              <S.Input
                onChange={(e) => setCardNumber(e.target.value)}
                required
                type="text"
                id="card-number"
                name="card-number"
                maxLength={16}
              />
            </div>

            <div>
              <S.Label htmlFor="cvv">CVV</S.Label>
              <S.Input
                onChange={(e) => setCvv(e.target.value)}
                required
                type="text"
                id="cvv"
                name="cvv"
                maxLength={3}
              />
            </div>
          </S.InputWrapper>

          <S.InputWrapper>
            <div>
              <S.Label htmlFor="due-month">Mês de vencimento</S.Label>
              <S.Input
                onChange={(e) => setCardDueMonth(e.target.value)}
                required
                type="text"
                id="due-month"
                name="due-month"
                maxLength={8}
              />
            </div>

            <div>
              <S.Label htmlFor="due-year">Ano de vencimento</S.Label>
              <S.Input
                onChange={(e) => setCardDueYear(e.target.value)}
                required
                type="text"
                id="due-year"
                name="due-year"
                maxLength={4}
              />
            </div>
          </S.InputWrapper>

          <Button
            onClick={() => paymentHandler()}
            $background="beige"
            value="Finalizar pagamento"
          />
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
      {showSuccesMessage && (
        <S.Sucess>
          <S.SucessTitle>Pedido realizado - {ORDER_ID}</S.SucessTitle>
          <S.SucessText>{sucessText}</S.SucessText>
          <Button
            onClick={() => sucessHandler()}
            $background="beige"
            value="Concluir"
          />
        </S.Sucess>
      )}
    </S.ShoppingCartAside>
  )
}

export default ShoppingCart
