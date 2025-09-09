import styled from 'styled-components'
import { colors } from '../../styles'

export const RestaurantsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.tertiaryColor};
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 217px;
`

export const Title = styled.h2`
  font-size: 18px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const GradeWrapper = styled.div`
  height: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 18px;

  img {
    width: 21px;
    height: 21px;
    margin-left: 8px;
  }
`

export const DetailsWrapper = styled.div`
  padding: 8px;
  background-color: ${colors.textColor};
  border: 1px solid ${colors.tertiaryColor};
  border-top: 1px solid transparent;
`

export const Description = styled.p`
  font-size: 14px;
  margin: 8px 0;
`
