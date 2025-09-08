import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`

export const Product = styled.div`
  background-color: ${colors.tertiaryColor};
  color: ${colors.secondaryColor};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Name = styled.h2`
  font-size: 16px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  white-space: pre-line;
`

export const Modal = styled.div`
  height: 344px;
  background-color: ${colors.tertiaryColor};
  color: ${colors.secondaryColor};
  padding: 32px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 80px;
  z-index: 2;
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  margin-right: 24px;
  object-fit: cover;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
