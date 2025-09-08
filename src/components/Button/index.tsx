import { ButtonElement } from './styles'

export type Props = {
  value: string
  background: 'orange' | 'beige'
}

const Button = ({ value, background }: Props) => (
  <ButtonElement to="/" background={background}>
    {value}
  </ButtonElement>
)

export default Button
