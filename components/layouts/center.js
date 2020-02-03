import React from 'react'
import styled from 'styled-components'

const LayoutStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => (
  <LayoutStyled>
    {children}
  </LayoutStyled>
)

export default Layout
