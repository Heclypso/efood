import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

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

  @media (max-width: ${breakpoints.desktop}) {
    padding: ${({ shape }) => (shape === 'home' ? '40px 0' : '0 5vw')};
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: ${({ shape }) => (shape === 'home' ? '288px' : '186px')};
    padding: 40px 0px;
  }
`

export const ShoppingCart = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.tertiaryColor};
  width: 199px;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
    text-align: center;

    > span {
      display: none;
    }
  }
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

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }
`

export const Category = styled.h2`
  font-size: 32px;
  font-weight: 100;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 2rem;
  }
`

export const Name = styled.h1`
  font-size: 32px;
  font-weight: 900;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.6rem;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.tertiaryColor};
  width: 539px;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
    width: 80vw;
  }
`
