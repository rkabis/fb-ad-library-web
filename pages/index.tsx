import React, { ReactElement } from 'react'
import { NextPage } from 'next'

import SearchModule from '../src/modules/Search'

const Home: NextPage = (): ReactElement => {
  return (
    <div>
      <SearchModule />
    </div>
  )
}

export default Home
