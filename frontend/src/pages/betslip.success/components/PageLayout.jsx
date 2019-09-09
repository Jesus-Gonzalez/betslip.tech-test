import React from 'react'

import { Layout } from 'components'

import { Receipt } from 'pages/betslip.success/components'

import styles from './PageLayout.module.scss'

export const PageLayout = React.memo(props => (
  <Layout className={styles.layout}>
    <Receipt {...props} />
  </Layout>
))
