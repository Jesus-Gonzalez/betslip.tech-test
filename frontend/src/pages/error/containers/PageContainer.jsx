import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withRouter } from 'react-router'

import { PageLayout } from 'pages/error/components'

const propTypes = {
  error: PropTypes.object,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

const defaultProps = {
  error: null
}

const PageContainer = ({ history, match }) => {
  const goBack = () => {
    history.push('/betslip')
  }

  return (
    <PageLayout
      goBack={goBack}
    />
  )
}

PageContainer.propTypes = propTypes

PageContainer.defaultProps = defaultProps

const ConnectedPageContainer = compose(
  withRouter
)(PageContainer)

export { ConnectedPageContainer as PageContainer }
