import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  height: 298px;
  background-color: ${colors.secondaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  margin-bottom: 32px;
`

export const IconsWrapper = styled.div`
  display: flex;
  width: 88px;
  justify-content: space-between;
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`

export const Text = styled.p`
  font-size: 10px;
  color: ${colors.tertiaryColor};
  text-align: center;
  width: 24rem;
`
