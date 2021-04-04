import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

export const Wrapper = styled.main``

type LabelColorProps = Pick<CheckboxProps, 'labelColor'>

export const Label = styled.label<LabelColorProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`
