import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { Filter } from 'pages/betslip/components'

import { onChangeFilter as onChangeFilterAction } from 'store/actions'

const FilterContainer = ({ selectedFilter, ...props }) => (
  <Filter
    {...props}
    selectedFilter={selectedFilter}
  />
)

const mapStateToProps = state => ({
  selectedFilter: state.Betslip.selectedFilter
})

const mapDispatchToProps = dispatch => ({
  onChangeFilter: compose(dispatch, onChangeFilterAction)
})

const ConnectedFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContainer)

export { ConnectedFilterContainer as FilterContainer }
