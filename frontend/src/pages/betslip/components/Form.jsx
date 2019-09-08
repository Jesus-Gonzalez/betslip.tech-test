import React from 'react'

import { Button } from 'components'

import { BetList, EmptyBetList } from 'pages/betslip/components'

export const Form = ({ bets }) => {
  const mainSection = bets && bets.length
    ? <BetList bets={bets} />
    : <EmptyBetList />

  return (
    <section>
      <main>
        {mainSection}
      </main>

      <footer>
        <Button submit>
          Bet Now
        </Button>
      </footer>
    </section>
  )
}
