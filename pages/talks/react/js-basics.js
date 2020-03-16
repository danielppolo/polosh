// import { NextPage } from 'next'
import React from 'react'
import Presentation from 'components/ui/Presentation'
import Slide from 'components/ui/Slide'
import SlideGroup from 'components/ui/SlideGroup'
import Variable from 'components/typography/Variable'
import Code from 'components/ui/Code'

const IndexPage = () => (
  <Presentation>
    <SlideGroup markdown>
      <h1>JavaScript ES6 🤟</h1>
    </SlideGroup>
    <SlideGroup>
      <Slide>
        <h2>Variables</h2>
      </Slide>
      <Slide>
        <p>
        A [variable](https://en.wikipedia.org/wiki/Variable_(computer_science)) is a “named storage” for data. We can use variables to store goodies, visitors, and other data.
        </p>
      </Slide>
      <Slide markdown>
      To create a variable in JavaScript, use the
        {' '}
        <strong>let</strong>
        {' '}
      keyword.
        <Code
          language="javascript"
          source={
            `
            let message;
            `
          }
        />
      </Slide>
      <Slide markdown>
      To create a variable in JavaScript, use the
        {' '}
        <strong>let</strong>
        {' '}
      keyword.
        <Code
          language="javascript"
          source={
            `
            let message;
            `
          }
        />
      </Slide>
    </SlideGroup>
  </Presentation>
)

export default IndexPage
