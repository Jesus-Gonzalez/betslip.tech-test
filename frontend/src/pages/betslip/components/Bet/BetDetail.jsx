import React from 'react'

// import styles from './BetDetail.module.scss'

export const BetDetail = React.memo(({ bet }) => {
  const bestOdd = React.useMemo(
    () => bet.odds.reduce(
      (bestOdd, odd) => (
        odd.oddsDecimal > bestOdd.oddsDecimal
          ? odd
          : bestOdd
      ), {}),
    [bet]
  )

  return (
    <div>
      <label>{bet.name}</label>
      <span>{bestOdd.oddsDecimal}</span>
    </div>
  )
})
