import { createGlobalStyle } from 'styled-components'

const DefaultStyles = createGlobalStyle`
  @font-face {
    font-family: 'Adapter';
    src: url('/fonts/Adapter.otf') format('opentype');
    font-weight: 100 900;
    font-style: oblique -10deg 0deg;
  }
`

export default DefaultStyles
