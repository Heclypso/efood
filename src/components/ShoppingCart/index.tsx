import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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
      delivery: {
        receiver: '',
        address: {
          description: '',
          city: '',
          zipCode: '',
          number: '',
          complement: ''
        }
      },
      payment: {
        card: {
          name: '',
          number: '',
          code: '',
          expires: {
            month: '',
            year: ''
          }
        }
      }
    },
    validationSchema: Yup.object({
      adressee: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres.')
        .required('O campo é obrigatório.'),
      adress: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres.')
        .required('O campo é obrigatório.'),
      city: Yup.string()
        .min(1, 'O nome da cidade precisa ter pelo menos um caractere')
        .required('O campo é obrigatório.'),
      cep: Yup.string().required('O campo é obrigatório.'),
      complement: Yup.string(),
      phoneNumber: Yup.string().required('O campo é obrigatório.'),
      cardName: Yup.string()
        .min(3, 'O nome no cartão precisa ter pelo menos 5 caracteres.')
        .required('O campo é obrigatório.'),
      cardNumber: Yup.string().required('O campo é obrigatório.'),
      cvv: Yup.string().required('O campo é obrigatório.'),
      dueMonth: Yup.string().required('O campo é obrigatório.'),
      dueYear: Yup.string().required('O campo é obrigatório.')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.delivery.receiver,
          address: {
            description: values.delivery.address.description,
            city: values.delivery.address.city,
            zipCode: values.delivery.address.zipCode,
            number: values.delivery.address.number,
            complement: values.delivery.address.complement
          }
        },
        payment: {
          card: {
            name: values.payment.card.name,
            number: values.payment.card.number,
            code: Number(values.payment.card.code),
            expires: {
              month: Number(values.payment.card.expires.month),
              year: Number(values.payment.card.expires.year)
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

  const paymentHandler = () => {
    setShowPaymentForm(false)
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

      {showDeliveryForm && (
        <S.Form>
          <S.Title>Entrega</S.Title>

          <S.InputGroup>
            <S.Label htmlFor="receiver">Quem irá receber</S.Label>
            <input
              value={form.values.delivery.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              required
              type="text"
              id="receiver"
              name="receiver"
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label htmlFor="addressDescription">Endereço</S.Label>
            <input
              value={form.values.delivery.address.description}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              required
              type="text"
              id="addressDescription"
              name="addressDescription"
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label htmlFor="city">Cidade</S.Label>
            <input
              value={form.values.delivery.address.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              required
              type="text"
              id="city"
              name="city"
            />
          </S.InputGroup>

          <S.InputWrapper>
            <S.InputGroup>
              <S.Label htmlFor="zipCode">CEP</S.Label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={form.values.delivery.address.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="number">Número</S.Label>
              <input
                value={form.values.delivery.address.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                required
                type="text"
                id="number"
                name="number"
              />
            </S.InputGroup>
          </S.InputWrapper>

          <S.InputGroup>
            <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
            <input
              value={form.values.delivery.address.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              type="text"
              id="complement"
              name="complement"
            />
          </S.InputGroup>

          <Button
            onClick={() => {
              form.validateForm()
              if (form.isValid) {
                deliveryHandler()
              }
            }}
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
        </S.Form>
      )}

      {showPaymentForm && (
        <S.Form>
          <S.Title>
            Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}
          </S.Title>

          <S.InputGroup>
            <S.Label htmlFor="cardName">Nome no cartão</S.Label>
            <input
              value={form.values.payment.card.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              required
              type="text"
              id="cardName"
              name="cardName"
            />
          </S.InputGroup>

          <S.InputWrapper>
            <S.InputGroup>
              <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
              <input
                value={form.values.payment.card.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                required
                type="text"
                id="cardNumber"
                name="cardNumber"
              />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="cardCode">CVV</S.Label>
              <input
                value={form.values.payment.card.code}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                required
                type="text"
                id="cardCode"
                name="cardCode"
              />
            </S.InputGroup>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.InputGroup>
              <S.Label htmlFor="expiresMonth">Mês de vencimento</S.Label>
              <input
                value={form.values.payment.card.expires.month}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                required
                type="text"
                id="expiresMonth"
                name="expiresMonth"
              />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="expiresYear">Ano de vencimento</S.Label>
              <input
                value={form.values.payment.card.expires.year}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                required
                type="text"
                id="expiresYear"
                name="expiresYear"
              />
            </S.InputGroup>
          </S.InputWrapper>

          <Button
            disabled={isLoading}
            onClick={() => {
              form.handleSubmit
              paymentHandler()
            }}
            $background="beige"
            value={isLoading ? 'Finalizando pedido...' : 'Finalizar pagamento'}
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
        </S.Form>
      )}
      {isSuccess && (
        <S.Sucess>
          <S.SucessTitle>Pedido realizado - ##########</S.SucessTitle>
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
