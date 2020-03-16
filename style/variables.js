import { createGlobalStyle } from 'styled-components'

const DefaultStyles = createGlobalStyle`
    :root {
    /* Color */
    --primary: ${({ primary }) => primary};
    --secondary: ${({ secondary }) => secondary};
    --black: ${({ black }) => black};
    /* Font */
    --sans: 'TT Runs', sans-serif;
    --mono: 'Space Mono', monospace;

  }
`

export default DefaultStyles
