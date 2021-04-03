import {
  ReactNode,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType
} from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: ReactNode
  as?: ElementType
} & ButtonTypes

export const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  minimal = false,
  onClick,
  ...rest
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    onClick={onClick}
    minimal={minimal}
    {...rest}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)
