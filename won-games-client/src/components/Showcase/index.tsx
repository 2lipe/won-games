import { Heading } from 'components/Heading'
import { Highlight, HighlightProps } from 'components/Highlight'
import { GameCardSlider } from 'components/GameCardSlider'

import * as S from './styles'
import { GameCardProps } from 'components/GameCard'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

export const Showcase = ({ title, games, highlight }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary" color="white">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} />}
  </S.Wrapper>
)
