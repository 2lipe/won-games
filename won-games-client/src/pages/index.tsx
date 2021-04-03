import { Home, HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  // lógica

  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighLight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighLight: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighLight: highlightMock
    }
  }
}

// Métodos getStaticProps/getServerSideProps só funcionam em Pages.
