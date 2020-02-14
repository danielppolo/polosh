import { NextPage } from 'next'
import React from 'react'
import Button from 'components/ui/Button'
import Link from 'components/ui/Link'

const IndexPage: NextPage = () => (
  <p>
      Daniel lives in 2077,
      is a
    {' '}
    <Button>compulsive</Button>
    {' '}
gadget buyer and
      follows 17 IG accounts of baby bunnies.
      From a very early stage of his life he developed an
    {' '}
    <Link href="/login">OCD</Link>
    {' '}
for design.
      He graduated from architecture but he spends the day coding for just another startup.
      Daniel drinks espresso and types with Futura.
  </p>
)

export default IndexPage
