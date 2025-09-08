import styled from 'styled-components'
import { colors } from '../../styles'

import pattern from '../../assets/images/pattern.png'

export const HeaderContainer = styled.header`
  height: 384px;
  background-image: url('${pattern}');
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${colors.tertiaryColor};
  width: 539px;
  text-align: center;
`
