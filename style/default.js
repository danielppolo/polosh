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
    -webkit-tap-highlight-color: transparent;
  }

  ::-moz-selection { 
    background: var(--white);
    line-height: 10px;
  }

  ::selection { 
    background: var(--white); 
    line-height: 10px;
  } 


  p {
    font-family: var(--sans);
    font-size: 90px;
    line-height: 1.2em;
    font-weight: 500;
  }
`

export default DefaultStyles
