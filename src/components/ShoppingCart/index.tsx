import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import InputMask from 'react-input-mask'

import Button from '../Button'

import trashCam from '../../assets/icons/lixeira-de-reciclagem.svg'

import * as S from './styles'

import {
  deleteAllShoppingCartItem,
  deleteShoppingCartItem,
  toggleShowOverlay,
  toggleShowShoppingCart
} from '../../store/reducers/shoppingCartReducer'
import { RootReducer } from '../../store'
import { getTotalPrice, parseToBrl } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

const ShoppingCart = () => {
  const { items } = useSelector((state: RootReducer) => state.shoppingCart)
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      name: '',
      cardNumber: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      // Validação da entrega

      receiver: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres.')
        .required('O campo é obrigatório.'),
      description: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres.')
        .required('O campo é obrigatório.'),
      city: Yup.string()
        .min(1, 'O nome da cidade precisa ter pelo menos um caractere')
        .required('O campo é obrigatório.'),
      zipCode: Yup.string()
        .min(8, 'O campo deve conter 8 caracteres')
        .max(8, 'O campo deve conter 8 caracteres')
        .required('O campo é obrigatório.'),
      number: Yup.string()
        .min(1, 'O campo deve conter pelo menos um digito')
        .required('O campo é obrigatório.'),
      complement: Yup.string(),

      // Validação do cartão

      name: Yup.string()
        .min(3, 'O nome no cartão precisa ter pelo menos 5 caracteres.')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'O número do cartão deve ter 16 digitos')
        .max(16, 'O número do cartão deve ter 16 digitos')
        .required('O campo é obrigatório.'),
      code: Yup.string()
        .min(3, 'O campo deve conter 3 caracteres')
        .max(3, 'O campo deve conter 3 caracteres')
        .required('O campo é obrigatório.'),
      month: Yup.string()
        .min(2, 'O campo deve conter 2 caracteres')
        .max(2, 'O campo deve conter 2 caracteres')
        .required('O campo é obrigatório.'),
      year: Yup.string()
        .min(4, 'O campo deve conter 4 caracteres')
        .max(4, 'O campo deve conter 4 caracteres')
        .required('O campo é obrigatório.')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.name,
            number: values.number,
            code: Number(values.code),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        }
      })
    }
  })

  const [showShoppingCart, setShowShoppingCart] = useState(true)
  const [showDeliveryForm, setShowDeliveryForm] = useState(false)
  const [showPaymentForm, setShowPaymentForm] = useState(false)

  const deliveryHandler = () => {
    setShowPaymentForm(true)
    setShowDeliveryForm(false)
  }

  const sucessHandler = () => {
    setShowShoppingCart(true)
    setShowDeliveryForm(false)
    setShowPaymentForm(false)
    dispatch(toggleShowShoppingCart())
    dispatch(toggleShowOverlay())
    dispatch(deleteAllShoppingCartItem())
  }

  const checkInputHasErrors = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const checkCurrentStepIsInvalid = (inputs: string[]) => {
    const isTouched = inputs.some((input) => input in form.touched)
    const isInvalid = inputs.some((input) => input in form.errors)

    const result = isTouched && isInvalid

    if (!isTouched) {
      return true
    }
    return result
  }

  return (
    <S.ShoppingCartAside>
      {showShoppingCart && (
        <>
          {showShoppingCart && items.length === 0 && (
            <S.Title>Carrinho vazio, adicione um item.</S.Title>
          )}
          <ul>
            {items.map((item, index) => (
              <S.ShoppingCartItem key={`${item.id}-${index}`}>
                <S.Image src={item.foto} alt="Imagem do produto" />
                <div>
                  <S.Name>{item.nome}</S.Name>
                  <S.Price>{parseToBrl(item.preco)}</S.Price>
                </div>
                <S.DeleteIcon
                  onClick={() => dispatch(deleteShoppingCartItem(item.id))}
                  src={trashCam}
                  alt="Icone de excluir o produto"
                />
              </S.ShoppingCartItem>
            ))}
          </ul>

          {items.length != 0 && (
            <S.ShoppingCartFooter>
              <S.ShoppingCartFooterWrapper>
                <p>Valor total</p>
                <p>{parseToBrl(getTotalPrice(items))}</p>
              </S.ShoppingCartFooterWrapper>
              <Button
                onClick={() => {
                  setShowDeliveryForm(true)
                  setShowShoppingCart(false)
                }}
                type="button"
                value="Continuar com a entrega"
                $background="beige"
              />
            </S.ShoppingCartFooter>
          )}
        </>
      )}

      {!isSuccess && (
        <S.Form onSubmit={form.handleSubmit}>
          {showDeliveryForm && (
            <>
              <S.Title>Entrega</S.Title>

              <S.InputGroup>
                <S.Label htmlFor="receiver">Quem irá receber</S.Label>
                <input
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  required
                  type="text"
                  id="receiver"
                  name="receiver"
                  autoComplete="username"
                  className={checkInputHasErrors('receiver') ? 'error' : ''}
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label htmlFor="description">Endereço</S.Label>
                <input
                  value={form.values.description}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  required
                  type="text"
                  id="description"
                  name="description"
                  autoComplete="street-address"
                  className={checkInputHasErrors('description') ? 'error' : ''}
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label htmlFor="city">Cidade</S.Label>
                <input
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  required
                  type="text"
                  id="city"
                  name="city"
                  autoComplete="address-level2"
                  className={checkInputHasErrors('city') ? 'error' : ''}
                />
              </S.InputGroup>

              <S.InputWrapper>
                <S.InputGroup>
                  <S.Label htmlFor="zipCode">CEP</S.Label>
                  <input
                    //<InputMask
                    //mask="99999-999"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="zipCode"
                    name="zipCode"
                    autoComplete="postal-code"
                    className={checkInputHasErrors('zipCode') ? 'error' : ''}
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <S.Label htmlFor="number">Número</S.Label>
                  <input
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    required
                    type="tel"
                    id="number"
                    name="number"
                    autoComplete="address-line2"
                    className={checkInputHasErrors('number') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.InputWrapper>

              <S.InputGroup>
                <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
                <input
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  type="text"
                  id="complement"
                  name="complement"
                  autoComplete="address-line3"
                />
              </S.InputGroup>

              <Button
                disabled={checkCurrentStepIsInvalid([
                  'receiver',
                  'description',
                  'city',
                  'number',
                  'zipCode'
                ])}
                onClick={deliveryHandler}
                type="button"
                $background="beige"
                value="Continuar com o pagamento"
              />
              <Button
                onClick={() => {
                  setShowShoppingCart(true)
                  setShowDeliveryForm(false)
                }}
                type="button"
                $background="beige"
                value="Voltar para o carrinho"
              />
            </>
          )}
          {showPaymentForm && (
            <>
              <S.Title>
                Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}
              </S.Title>

              <S.InputGroup>
                <S.Label htmlFor="name">Nome no cartão</S.Label>
                <input
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  required
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="cc-name"
                  className={checkInputHasErrors('name') ? 'error' : ''}
                />
              </S.InputGroup>

              <S.InputWrapper>
                <S.InputGroup>
                  <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
                  <input
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    required
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    autoComplete="cc-number"
                    className={checkInputHasErrors('cardNumber') ? 'error' : ''}
                    maxLength={16}
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <S.Label htmlFor="code">CVV</S.Label>
                  <input
                    value={form.values.code}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    required
                    type="text"
                    id="code"
                    name="code"
                    autoComplete="cc-csc"
                    className={checkInputHasErrors('code') ? 'error' : ''}
                    maxLength={3}
                  />
                </S.InputGroup>
              </S.InputWrapper>

              <S.InputWrapper>
                <S.InputGroup>
                  <S.Label htmlFor="month">Mês de vencimento</S.Label>
                  <input
                    value={form.values.month}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    required
                    type="text"
                    id="month"
                    name="month"
                    autoComplete="cc-exp-month"
                    className={checkInputHasErrors('month') ? 'error' : ''}
                    maxLength={2}
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <S.Label htmlFor="year">Ano de vencimento</S.Label>
                  <input
                    value={form.values.year}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    required
                    type="text"
                    id="year"
                    name="year"
                    autoComplete="cc-exp-year"
                    className={checkInputHasErrors('year') ? 'error' : ''}
                    maxLength={4}
                  />
                </S.InputGroup>
              </S.InputWrapper>

              <Button
                disabled={checkCurrentStepIsInvalid([
                  'name',
                  'cardNumber',
                  'code',
                  'month',
                  'year'
                ])}
                $background="beige"
                value={
                  isLoading ? 'Finalizando pedido...' : 'Finalizar pagamento'
                }
                type="submit"
              />
              <Button
                disabled={isLoading}
                onClick={() => {
                  setShowShoppingCart(false)
                  setShowDeliveryForm(true)
                  setShowPaymentForm(false)
                }}
                type="button"
                $background="beige"
                value="Voltar para a edição de endereço"
              />
            </>
          )}
        </S.Form>
      )}

      {isSuccess && data && (
        <S.Sucess>
          <S.SucessTitle>Pedido realizado - {data.orderId}</S.SucessTitle>
          <S.SucessText>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido. <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição. <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </S.SucessText>
          <Button
            onClick={sucessHandler}
            type="button"
            $background="beige"
            value="Concluir"
          />
        </S.Sucess>
      )}
    </S.ShoppingCartAside>
  )
}

export default ShoppingCart
