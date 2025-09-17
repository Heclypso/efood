import logo from '../../assets/images/logo.png'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'

import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <S.ImageWrapper>
      <S.Logo src={logo} alt="Logo da efood" />
      <S.IconsWrapper>
        <S.Icon src={instagram} alt="Logo do Instagram" />
        <S.Icon src={facebook} alt="Logo do Facebook" />
        <S.Icon src={twitter} alt="Logo do Twitter" />
      </S.IconsWrapper>
    </S.ImageWrapper>
    <S.Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Text>
  </S.FooterContainer>
)

export default Footer
