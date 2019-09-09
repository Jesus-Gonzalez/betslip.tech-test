import React from 'react'

import { Layout } from 'components'

import { FilterContainer, FormContainer } from 'pages/betslip/containers'
import { Betslip } from 'pages/betslip/components'

import styles from './PageLayout.module.scss'

export const PageLayout = React.memo(() => (
  <Layout className={styles.wrapper}>
    <Betslip>
      <FilterContainer />
      <FormContainer
        className={styles.form}
      />
    </Betslip>
  </Layout>
))
