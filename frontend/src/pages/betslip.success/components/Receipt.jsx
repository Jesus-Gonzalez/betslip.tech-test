import React from 'react'
import PropTypes from 'prop-types'

import { Button, Card } from 'components'

import { Header } from 'pages/betslip.success/components'

import styles from './Receipt.module.scss'

const propTypes = {
  goBack: PropTypes.func.isRequired,
  totalStake: PropTypes.number.isRequired
}

export const Receipt = React.memo(({ goBack, totalStake }) => (
  <Card
    corner
    className={styles.wrapper}
  >
    <Header />
    <h2>Your bet has been placed</h2>

    <label>Total Stake: <output>{totalStake}</output> £</label>

    <Button
      className={styles.button}
      onClick={goBack}
    >
      Go to betslip
    </Button>
  </Card>
))

Receipt.propTypes = propTypes
