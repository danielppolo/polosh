import React from 'react'
import DefaultStyles from 'style/default'
import Fonts from 'style/fonts'
import Variables from 'style/variables'

const GlobalStyle = ({ theme }) => (
  <>
    <Variables {...theme} />
    <Fonts />
    <DefaultStyles />
  </>
)

export default GlobalStyle
