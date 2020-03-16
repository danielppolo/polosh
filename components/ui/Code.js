import React, { useEffect, useRef } from 'react'
import Prism from 'prismjs'

const Code = ({ language, source }) => {
  const code = useRef(null)
  useEffect(() => {
    const str = Prism.highlight(source, Prism.languages[language], language)
    code.current.insertAdjacentHTML('beforeend', str)
  }, [])

  return (
    <pre className={`language-${language}`}>
      <code ref={code} />
    </pre>
  )
}


export default Code
