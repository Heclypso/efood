import { Link } from 'react-router-dom'

import { ButtonElement } from './styles'

export type Props = {
  value: string
  $background: 'orange' | 'beige' | 'transparent'
  to?: string
  onClick?: () => void
}

const Button = ({ value, $background, to, onClick }: Props) => {
  if (to) {
    return (
      <ButtonElement as={Link} to={to} $background={$background}>
        {value}
      </ButtonElement>
    )
  }

  return (
    <ButtonElement
      as="button"
      type="button"
      onClick={onClick}
      $background={$background}
    >
      {value}
    </ButtonElement>
  )
}

export default Button
