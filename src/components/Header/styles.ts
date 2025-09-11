import styled from 'styled-components'
import { colors } from '../../styles'

import pattern from '../../assets/images/pattern.png'

import { Props } from '.'

export const HeaderContainer = styled.header<Props>`
  height: ${({ shape }) => (shape === 'home' ? '384px' : '186px')};
  background-image: url('${pattern}');
  padding: 40px 0px;
  display: flex;
  flex-direction: ${({ shape }) => (shape === 'home' ? 'column' : 'row')};
  align-items: center;
  justify-content: space-between;
`

export const ShoppingCart = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.tertiaryColor};
  width: 199px;
  cursor: pointer;
`

export const ProfileHeaderWrapper = styled.div<Props>`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: ${({ shape }) => (shape === 'home' ? 'column' : 'row')};
  align-items: center;
  justify-content: space-between;
`

export const ProfileInfoWrapper = styled.div`
  color: ${colors.textColor};
`

export const ProfileInfo = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0px 32px 0px;
`

export const Category = styled.h2`
  font-size: 32px;
  font-weight: 100;
`

export const Name = styled.h1`
  font-size: 32px;
  font-weight: 900;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.tertiaryColor};
  width: 539px;
  text-align: center;
`
