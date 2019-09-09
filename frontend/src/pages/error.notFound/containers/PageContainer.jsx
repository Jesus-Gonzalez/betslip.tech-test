import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import { PageLayout } from 'pages/error.notFound/components'

const propTypes = {
  history: PropTypes.object.isRequired
}

const PageContainer = ({ history }) => {
  const goBack = () => {
    history.push('/')
  }

  return (
    <PageLayout
      goBack={goBack}
    />
  )
}

PageContainer.propTypes = propTypes

const RoutedPageContainer = withRouter(PageContainer)

export { RoutedPageContainer as PageContainer }
