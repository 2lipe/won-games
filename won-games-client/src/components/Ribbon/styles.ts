import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps } from '.'

type WrapperProps = Omit<RibbonProps, 'children'>

const WrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `,

  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.small};
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    font-size: ${theme.font.sizes.xsmall};
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color, size }) => css`
    ${!!color && WrapperModifiers.color(theme, color)};
    ${!!size && WrapperModifiers[size](theme)};
  `}
`
