import { NextPage } from 'next'
import React from 'react'
import LayoutCenter from '../components/layouts/center'
import Typed from '../components/ui/typed'

const IndexPage: NextPage = () => (
  <LayoutCenter>
    <Typed>
      <p>Daniel lives in 2077,</p>
      <p>is a compulsive gadget buyer and</p>
      <p>follows 17 IG accounts of baby bunnies.</p>
      <p>From a very early stage of his life he developed an OCD for design.</p>
      <p>He graduated from architecture but he spends the day coding for just another startup.</p>
      <p>Daniel drinks espresso and types with Futura.</p>
    </Typed>
  </LayoutCenter>
)

export default IndexPage
