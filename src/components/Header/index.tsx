import {
  Title,
  HeaderContainer,
  ShoppingCart,
  ProfileHeaderWrapper,
  ProfileInfo,
  ProfileInfoWrapper,
  Category,
  Name
} from './styles'

import logo from '../../assets/images/logo.png'
import Button from '../Button'

export type Props = {
  shape: 'profile' | 'home'
}

const Header = ({ shape }: Props) => (
  <>
    <HeaderContainer shape={shape}>
      <ProfileHeaderWrapper shape={shape}>
        {shape === 'profile' && (
          <Button to="/" value="Restaurantes" background="transparent" />
        )}
        <img src={logo} alt="Logo da efood" />
        {shape === 'profile' && (
          <ShoppingCart>0 - Produtos no carrinho</ShoppingCart>
        )}
      </ProfileHeaderWrapper>
      {shape === 'home' && (
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      )}
    </HeaderContainer>
    {shape === 'profile' && (
      <ProfileInfoWrapper>
        <ProfileInfo>
          <Category>Italiana</Category>
          <Name>La Dolce Vita Trattoria</Name>
        </ProfileInfo>
      </ProfileInfoWrapper>
    )}
  </>
)

export default Header
