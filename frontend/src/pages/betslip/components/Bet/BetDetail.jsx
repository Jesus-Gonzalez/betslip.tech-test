import React from 'react'

import { Flag } from 'components'

import styles from './BetDetail.module.scss'

export const BetDetail = React.memo(({ bet }) => {
  const bestOdd = React.useMemo(
    () => bet.odds.reduce(
      (bestOdd, odd) => (
        odd.oddsDecimal > bestOdd.oddsDecimal
          ? odd
          : bestOdd
      ), bet.odds[0]),
    [bet]
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Flag country={bet.country} />
        <label className={styles.name}>{bet.name}</label>
      </div>
      <div className={styles.bestOdd}>
        <label className={styles.title}>Best Odd</label>
        <output>{bestOdd.oddsDecimal}</output>
      </div>
    </div>
  )
})
