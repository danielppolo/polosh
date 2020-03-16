import React from 'react'
import DefaultStyles from 'style/default'
import Fonts from 'style/fonts'
import Variables from 'style/variables'
import RevealStyle from 'style/reveal'
import PrismStyle from 'style/prism'

const GlobalStyle = ({ theme }) => (
  <>
    <Variables {...theme} />
    <Fonts />
    <RevealStyle />
    <PrismStyle />
    <DefaultStyles />
  </>
)

export default GlobalStyle
