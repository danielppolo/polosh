import { NextPage } from 'next'
import React from 'react'
import Input from 'components/ui/Input'
import LayoutCenter from 'components/layouts/center'

const IndexPage: NextPage = () => (
  <LayoutCenter>
    <Input autoFocus type="password" />
    <h1>→</h1>
  </LayoutCenter>
)

export default IndexPage
