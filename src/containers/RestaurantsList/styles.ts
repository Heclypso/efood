import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const RestaurantsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    width: 90vw;
    gap: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.tertiaryColor};
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 217px;

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
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
  line-height: 22px;
  margin: 16px 0;
`
