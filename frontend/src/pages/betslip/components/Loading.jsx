import React from 'react'

import { Loading as LoadingWrapper } from 'components'

import styles from './Loading.module.scss'

export const Loading = React.memo(() => (
  <LoadingWrapper className={styles.wrapper}>
    <span>Loading bets...</span>
  </LoadingWrapper>
))
