import React from 'react'

import { Card, Layout } from 'components'

import { Header, ErrorBox } from 'pages/betslip.error/components'

import styles from './PageLayout.module.scss'

export const PageLayout = React.memo(props => (
  <Layout className={styles.wrapper}>
    <Card
      corner
      className={styles.card}
    >
      <Header />
      <ErrorBox {...props} />
    </Card>
  </Layout>
))
