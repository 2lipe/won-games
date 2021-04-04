import { Heading } from 'components/Heading'
import { Highlight, HighlightProps } from 'components/Highlight'
import { GameCardSlider } from 'components/GameCardSlider'

import * as S from './styles'
import { GameCardProps } from 'components/GameCard'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  color?: 'white' | 'black'
}

export const Showcase = ({ title, games, highlight, color }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary" color={color}>
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
)
