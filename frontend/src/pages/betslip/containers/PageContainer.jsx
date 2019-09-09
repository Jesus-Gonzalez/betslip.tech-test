/* eslint-disable */

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
  // uncomment next line to test application error handler
  // throw new Error('unexpected frontend non-handled exception')

  React.useEffect(() => {
    error && history.push('/betslip/error', { error })
  }, [error, history])

  React.useEffect(() => {
    fetchBets(selectedFilter)
  }, [fetchBets, selectedFilter])

  return <PageLayout />
}

PageContainer.propTypes = propTypes

const mapStateToProps = state => ({
  error: state.Betslip.error,
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
