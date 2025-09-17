import { Link } from 'react-router-dom'

import { ButtonElement } from './styles'

export type Props = {
  value: string
  $background: 'orange' | 'beige' | 'transparent'
  to?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

const Button = ({ value, $background, to, onClick, type, disabled }: Props) => {
  if (to) {
    return (
      <ButtonElement as={Link} to={to} $background={$background}>
        {value}
      </ButtonElement>
    )
  }

  return (
    <ButtonElement
      disabled={disabled}
      as="button"
      type={type}
      onClick={onClick}
      $background={$background}
    >
      {value}
    </ButtonElement>
  )
}

export default Button
