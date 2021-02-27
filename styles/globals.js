import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  h1 {
    font-size: ${({ theme }) => theme.font.title}px;
  }

  h2 {
    font-size: ${({ theme }) => theme.font.title}px;
  }

  h3 {
    font-size: ${({ theme }) => theme.font.subtitle}px;
  }

  body, p {
    font-size: ${({ theme }) => theme.font.body}px;
  }
`
