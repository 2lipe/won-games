import { Story, Meta } from '@storybook/react/types-6-0'
import { GameCardSlider, GameCardSliderProps } from '.'

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

export default {
  title: 'GameCardSlider',
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  component: GameCardSlider
} as Meta

export const Default: Story<GameCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)
