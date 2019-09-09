import React from 'react'

import { Icon } from 'components'

import styles from './Social.module.scss'

export const Social = React.memo(({
  className,
  ...props
}) => (
  <section className={styles.social}>
    <div className={styles.networks}>
      <Icon
        icon='facebook'
      />
      <Icon
        icon='twitter'
      />
    </div>
    <div className={styles.gambling}>
      <Icon
        icon='gamstop'
      />
      <Icon
        icon='over-18'
      />
      <Icon
        icon='gamble-aware'
      />
    </div>
  </section>
))
