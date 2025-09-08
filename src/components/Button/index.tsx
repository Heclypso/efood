import { ButtonElement } from './styles'

export type Props = {
  value: string
  background: 'orange' | 'beige' | 'transparent'
  to: string
}

const Button = ({ value, background, to }: Props) => (
  <ButtonElement to={to} background={background}>
    {value}
  </ButtonElement>
)

export default Button
