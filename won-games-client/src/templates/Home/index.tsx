import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { Heading } from 'components/Heading'
import { Menu } from 'components/Menu'
import { BannerSlider } from 'components/BannerSlider'
import { GameCardSlider } from 'components/GameCardSlider'
import { Highlight } from 'components/Highlight'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighLight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighLight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighLight: HighlightProps
}

export const Home = ({
  banners,
  newGames,
  mostPopularHighLight,
  mostPopularGames,
  upcommingGames,
  upcommingHighLight,
  upcommingMoreGames,
  freeGames,
  freeHighLight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />

      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary" color="white">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighLight} />
        <GameCardSlider items={mostPopularGames} />
      </S.SectionMostPopular>
    </Container>

    <S.SectionUpcomming>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Upcomming
        </Heading>

        <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighLight} />
        <GameCardSlider items={upcommingMoreGames} />
      </Container>
    </S.SectionUpcomming>

    <S.SectionFreeGames>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Free Games
        </Heading>

        <Highlight {...freeHighLight} />
        <GameCardSlider items={freeGames} />
      </Container>
    </S.SectionFreeGames>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)
