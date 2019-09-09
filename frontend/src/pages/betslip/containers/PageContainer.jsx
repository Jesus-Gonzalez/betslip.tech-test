import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { PageLayout } from 'pages/betslip/components'

import { fetchBets as fetchBetsAction } from 'store/thunks/betslip'

const propTypes = {
  fetchBets: PropTypes.func.isRequired
}

const PageContainer = ({ error, fetchBets, history, selectedFilter }) => {
  React.useEffect(() => {
    error && history.push('/betslip/error', { error })
  }, [error])

  React.useEffect(() => {
    fetchBets(selectedFilter)
  }, [fetchBets, selectedFilter])

  return <PageLayout />
}

PageContainer.propTypes = propTypes

const mapStateToProps = state => ({
  selectedFilter: state.Betslip.selectedFilter
})

const mapDispatchToProps = dispatch => ({
  fetchBets: compose(dispatch, fetchBetsAction)
})

const ConnectedPageContainer = compose(
  connect(
    mapStateToProps, mapDispatchToProps
  ),
  withRouter
)(PageContainer)

export { ConnectedPageContainer as PageContainer }
