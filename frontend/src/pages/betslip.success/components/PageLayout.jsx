import React from 'react'

import { Layout } from 'components'

import { Header, Receipt } from 'pages/betslip.success/components'

export const PageLayout = React.memo(props => (
  <Layout>
    <Header />
    <Receipt {...props} />
  </Layout>
))
