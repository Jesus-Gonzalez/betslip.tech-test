import React from 'react'

import { BetDetail } from './BetDetail'
import { BetInput } from './BetInput'

import styles from './Bet.module.scss'

export const Bet = props => (
  <div
    className={styles.wrapper}
  >
    <BetDetail
      {...props}
      className={styles.detail}
    />
    <BetInput
      {...props}
      className={styles.input}
    />
  </div>
)
