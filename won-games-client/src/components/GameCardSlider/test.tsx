import 'match-media-mock'
import { render, screen } from '@testing-library/react'

import { GameCardSlider } from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/population-zero-img.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/population-zero-img.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/population-zero-img.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/population-zero-img.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/population-zero-img.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  }
]

describe('<GameCardSlider />', () => {
  it('should be render 4 active cards', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should be render white arrows if color is passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
