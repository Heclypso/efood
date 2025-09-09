import styled from 'styled-components'
import { colors } from '../../styles'

export const ShoppingCartAside = styled.aside`
  width: 360px;
  height: 100%;
  background-color: ${colors.tertiaryColor};
  padding: 32px 8px 0px 8px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`

export const ShoppingCartItem = styled.div`
  height: 100px;
  background-color: ${colors.secondaryColor};
  display: flex;
  gap: 8px;
  padding: 8px;
  position: relative;
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
