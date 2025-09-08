import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'
import { Link } from 'react-router-dom'

export const ButtonElement = styled(Link)<Omit<Props, 'value' | 'to'>>`
  width: ${({ background }) =>
    background === 'transparent' ? '199px' : 'auto'};
  background-color: ${({ background }) =>
    background === 'orange'
      ? colors.tertiaryColor
      : background === 'transparent'
        ? 'transparent'
        : colors.secondaryColor};
  color: ${({ background }) =>
    background === 'orange' ? colors.secondaryColor : colors.tertiaryColor};
  font-size: ${({ background }) =>
    background === 'transparent' ? '18px' : '14px'};
  font-weight: 700;
  border: none;
  padding: ${({ background }) =>
    background === 'transparent' ? '0' : '4px 8px'};
  text-decoration: none;
  display: inline-block;
  text-align: ${({ background }) => (background === 'beige' ? 'center' : '')};
`
