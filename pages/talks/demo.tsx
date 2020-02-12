import { NextPage } from 'next'
import React from 'react'
import Presentation from 'components/ui/Presentation'
import Slide from 'components/ui/Slide'
import SlideGroup from 'components/ui/SlideGroup'
import Variable from 'components/typography/Variable'

const IndexPage: NextPage = () => (
  <Presentation>
    <SlideGroup>
      <Slide>Hello</Slide>
      <Slide>World</Slide>
    </SlideGroup>
    <SlideGroup>
      <Slide>Daniel</Slide>
      <Slide>
        <Variable weight={900} slant={-10}>
          Polo
        </Variable>
      </Slide>
    </SlideGroup>
  </Presentation>
)

export default IndexPage
