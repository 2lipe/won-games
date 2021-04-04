import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should be render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should be render without label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('chekbox')).not.toBeInTheDocument()
  })

  it('should be render with black label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelColor="black" />)

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })
})
