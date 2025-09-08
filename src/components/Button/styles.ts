import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'
import { Link } from 'react-router-dom'

export const ButtonElement = styled(Link)<Omit<Props, 'value'>>`
  height: 22px;
  background-color: ${({ background }) =>
    background === 'orange' ? colors.tertiaryColor : colors.secondaryColor};
  color: ${colors.secondaryColor};
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 4px 8px;
  display: block;
`
