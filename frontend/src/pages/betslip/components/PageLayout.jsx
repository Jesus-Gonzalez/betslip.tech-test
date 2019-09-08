import React from 'react'

import { Layout } from 'components'

import { FilterContainer, FormContainer } from 'pages/betslip/containers'
import { Header } from 'pages/betslip/components'

export const PageLayout = React.memo(() => (
  <Layout>
    <Header />
    <FilterContainer />
    <FormContainer />
  </Layout>
))
