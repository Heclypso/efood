import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonElement } from '../../components/Button/styles'

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const Product = styled.div`
  background-color: ${colors.tertiaryColor};
  color: ${colors.secondaryColor};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;

  img {
    border-radius: 8px;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`

export const Name = styled.h2`
  font-size: 16px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  white-space: pre-line;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`

export const Modal = styled.div`
  height: 344px;
  background-color: ${colors.tertiaryColor};
  color: ${colors.secondaryColor};
  padding: 32px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 80px;
  z-index: 2;

  ${ButtonElement} {
    align-self: flex-start;
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;

    ${ButtonElement} {
      width: 100%;
    }
  }
`

export const CloseModal = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  margin-right: 24px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
