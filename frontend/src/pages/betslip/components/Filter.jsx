import React from 'react'
import PropTypes from 'prop-types'

import { Dropdown } from 'components'

import { availableFilters } from 'pages/betslip/data'

import styles from './Filter.module.scss'

export const Filter = React.memo(({
  className,
  onChangeFilter,
  selectedFilter
}) => (
  <section className={styles.wrapper}>
    <Dropdown
      className={styles.dropdown}
      onChange={onChangeFilter}
      options={availableFilters}
      selected={selectedFilter}
    />
  </section>
))

Filter.propTypes = {
  selectedFilter: PropTypes.object,
  onChangeFilter: PropTypes.func.isRequired
}

Filter.defaultProps = {
  selectedFilter: null
}
