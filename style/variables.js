import { createGlobalStyle } from 'styled-components'

const DefaultStyles = createGlobalStyle`
    :root {
    /* Color */
    --primary: ${({ primary }) => primary};
    --secondary: ${({ secondary }) => secondary};
    --black: ${({ black }) => black};
    /* Font */
    --sans: 'Adapter', sans-serif;
  }
`

export default DefaultStyles
