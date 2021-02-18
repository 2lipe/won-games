import { keyframes } from 'styled-components'

export const hoverAnimation = keyframes`
  from {
    width: 0;
    left: 50%;
  }

  to {
    width: 100%;
    left: 0;
  }
`

export const placeholderShimmer = keyframes`
  0% {
    background-position: -40rem 0;
  }

  100% {
    background-position: 40rem 0;

  }
`
