import React, { useEffect } from 'react'
import Typed from 'typed.js'
// https://github.com/mattboldt/typed.js/

type Props = {
  children: React.ReactNode
}

const DynamicText: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    new Typed('#typed', {
      stringsElement: '#typed-strings',
      smartBackspace: true,
      loop: false,
      showCursor: true,
      typeSpeed: 40,
    })
  }, [])

  return (
    <>
      <div id="typed-strings">
        {children}
      </div>
      <span id="typed" />
    </>
  )
}

export default DynamicText
