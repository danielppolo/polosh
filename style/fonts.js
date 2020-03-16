import { createGlobalStyle } from 'styled-components'

const DefaultStyles = createGlobalStyle`
  @font-face {
    font-family: 'Adapter';
    src: url('/fonts/Adapter.otf') format('opentype');
    font-weight: 100 900;
    font-style: oblique -10deg 0deg;
  }
  @font-face {
    font-family: 'TT Runs';
    src: url('/fonts/TT Runs.ttf') format('truetype');
    font-weight: 100 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'TT Runs';
    src: url('/fonts/TT Runs Italic.ttf') format('truetype');
    font-weight: 100 900;
    font-style: italic;
  }
`

export default DefaultStyles
