import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonElement } from '../Button/styles'

export const ShoppingCartAside = styled.aside`
  width: 360px;
  height: 100%;
  background-color: ${colors.tertiaryColor};
  padding: 32px 8px 8px 8px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  > h2 {
    text-align: center;
  }
`

export const ShoppingCartItem = styled.li`
  height: 100px;
  background-color: ${colors.secondaryColor};
  display: flex;
  gap: 8px;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const Name = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.tertiaryColor};
`

export const Price = styled.p`
  font-size: 14px;
  color: ${colors.tertiaryColor};
  margin-top: 16px;
`

export const DeleteIcon = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
`

export const ShoppingCartFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`

export const ShoppingCartFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.secondaryColor};
  margin-top: 24px;
`

export const Form = styled.form`
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: bold;

  ${ButtonElement} {
    width: 100%;

    &:first-of-type {
      margin-top: 16px;
      margin-bottom: 8px;
    }
  }
`

export const Title = styled.h2`
  font-size: 16px;
  color: ${colors.secondaryColor};
  font-weight: bold;
  margin-bottom: 16px;
`

export const Label = styled.label`
  color: ${colors.secondaryColor};
`

export const InputGroup = styled.div`
  input {
    font-weight: bold;
    height: 32px;
    width: 100%;
    border: none;
    background-color: ${colors.secondaryColor};
    color: ${colors.inputTextColor};
    margin: 8px 0px;
    padding: 8px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 34px;
`

export const Sucess = styled.div`
  color: ${colors.secondaryColor};

  ${ButtonElement} {
    width: 100%;
  }
`

export const SucessTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const SucessText = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;
  white-space: pre-line;
`
