import styled from 'styled-components'
import { colors } from '../../styles'

export const OverlayElement = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(${colors.overlayColor});
  z-index: 1;
`
