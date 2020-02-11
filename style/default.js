import { createGlobalStyle } from 'styled-components'

const DefaultStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    font-family: var(--sans);
    color: var(--black);
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  p {
    font-family: var(--sans);
    font-size: 90px;
    font-weight: 400;
    font-variation-settings: 'opsz' 4;
  }
`

export default DefaultStyles
