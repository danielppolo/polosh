import GlobalStyle from 'style'
import themes from 'style/themes'
import Head from 'next/head'

function App({ Component, pageProps }) {
  const theme = themes.light
  return (
    <>
      <GlobalStyle theme={theme} />
      <Component {...pageProps} />
    </>
  )
}

export default App
