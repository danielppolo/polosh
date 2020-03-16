import React from 'react'

const Slide = ({ children, markdown }) => (
  <section data-markdown={markdown}>
    {children}
  </section>
)

export default Slide
