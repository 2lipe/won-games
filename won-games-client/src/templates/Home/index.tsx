import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { Menu } from 'components/Menu'
import { BannerSlider } from 'components/BannerSlider'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Showcase } from 'components/Showcase'

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
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighLight}
      games={mostPopularGames}
      color="white"
    />

    <S.SectionUpcomming>
      <Showcase title="Upcomming" games={upcommingGames} color="white" />

      <Showcase highlight={upcommingHighLight} games={upcommingMoreGames} />
    </S.SectionUpcomming>

    <Showcase
      title="Free games"
      highlight={freeHighLight}
      games={freeGames}
      color="white"
    />

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)
