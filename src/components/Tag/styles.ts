import styled from 'styled-components'
import { colors } from '../../styles'

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`

export const TagElement = styled.div`
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;
  color: ${colors.secondaryColor};
  background-color: ${colors.tertiaryColor};
  margin-left: 8px;
`
