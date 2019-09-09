import React from 'react'
import PropTypes from 'prop-types'

import { Card } from 'components'
import { Header } from 'pages/betslip/components'

import styles from './Betslip.module.scss'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
}

export const Betslip = React.memo(({ children }) => (
  <Card
    className={styles.wrapper}
    corner
  >
    <Header />
    {children}
  </Card>
))

Betslip.propTypes = propTypes
