import React from 'react'

import { Layout } from 'components'

import { Header, ErrorBox } from 'pages/error/components'

export const PageLayout = React.memo(props => (
  <Layout>
    <Header />
    <ErrorBox {...props} />
  </Layout>
))
