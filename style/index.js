import React from 'react'
import DefaultStyles from 'style/default'
import Fonts from 'style/fonts'
import Variables from 'style/variables'
import RevealStyle from 'style/reveal'

const GlobalStyle = ({ theme }) => (
  <>
    <Variables {...theme} />
    <Fonts />
    <RevealStyle />
    <DefaultStyles />
  </>
)

export default GlobalStyle
