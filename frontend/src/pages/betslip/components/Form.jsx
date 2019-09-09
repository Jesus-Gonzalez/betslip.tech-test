import React from 'react'

import { Button } from 'components'

import { BetList, EmptyBetList } from 'pages/betslip/components'

import styles from './Form.module.scss'

export const Form = ({ bets, error, submitFailed, ...props }) => {
  const mainSection = bets && bets.length
    ? <BetList bets={bets} />
    : <EmptyBetList />

  const hasError = React.useMemo(
    () => submitFailed && error,
    [submitFailed, error]
  )

  return (
    <section>
      {hasError && (
        <header>
          <div className={styles.error}>
            {error}
          </div>
        </header>
      )}

      <main className={styles.main}>
        {mainSection}
      </main>

      <footer className={styles.footer}>
        <Button submit>
          Bet Now
        </Button>
      </footer>
    </section>
  )
}
