import { Title, HeaderContainer } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderContainer>
    <img src={logo} alt="Logo da efood" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </HeaderContainer>
)

export default Header
