import { Story, Meta } from '@storybook/react/types-6-0'
import { Highlight, HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/ddr4',
    backgroundImage: '/img/red-dead-img.jpg'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
