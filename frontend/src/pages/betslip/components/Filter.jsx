import React from 'react'
import PropTypes from 'prop-types'

import { Dropdown } from 'components'

import { availableFilters } from 'pages/betslip/data'

export const Filter = React.memo(({
  selectedFilter,
  onChangeFilter
}) => (
  <section>
    <Dropdown
      options={availableFilters}
      selected={selectedFilter}
      onChange={onChangeFilter}
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
