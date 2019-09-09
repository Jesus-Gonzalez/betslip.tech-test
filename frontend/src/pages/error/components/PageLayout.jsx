import React from 'react'

import { Card, Layout } from 'components'

import { Header, ErrorBox } from 'pages/error/components'

import styles from './PageLayout.module.scss'

export const PageLayout = React.memo(props => (
  <Layout
    className={styles.wrapper}
  >
    <Card corner>
      <Header />
      <ErrorBox {...props} />
    </Card>
  </Layout>
))
