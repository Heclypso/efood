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
`
