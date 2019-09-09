import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { PageLayout } from 'pages/error/components'

const propTypes = {
  history: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
}

const PageContainer = ({ history, error }) => {
  const goBack = () => {
    history.push('/betslip')
  }

  return (
    <PageLayout
      goBack={goBack}
      error={error}
    />
  )
}

PageContainer.propTypes = propTypes

const mapStateToProps = state => ({
  error: state.Betslip.error
})

const ConnectedPageContainer = compose(
  connect(
    mapStateToProps
  ),
  withRouter
)(PageContainer)

export { ConnectedPageContainer as PageContainer }
