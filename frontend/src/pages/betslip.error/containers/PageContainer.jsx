import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { PageLayout } from 'pages/betslip.error/components'

const propTypes = {
  history: PropTypes.object.isRequired,
  error: PropTypes.object
}

const defaultProps = {
  error: null
}

const PageContainer = ({ error, history, match, ...props }) => {
  React.useEffect(() => {
    !error && history.push('/')
  }, [error, history])

  const goBack = () => {
    history.push('/betslip')
  }

  return error && (
    <PageLayout
      goBack={goBack}
      error={error}
    />
  )
}

PageContainer.propTypes = propTypes

PageContainer.defaultProps = defaultProps

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
