import GlobalStyle from 'style'
import themes from 'style/themes'
import Head from 'next/head'
import { NextPage } from 'next'

const App: NextPage = ({ Component, pageProps }: any) => {
  const theme = themes.light
  return (
    <>
      <Head>
        <title>d a n i e l . p o l o</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <GlobalStyle theme={theme} />
      <Component {...pageProps} />
    </>
  )
}

export default App
