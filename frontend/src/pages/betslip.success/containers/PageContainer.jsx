import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { PageLayout } from 'pages/betslip.success/components'

const propTypes = {
  history: PropTypes.object.isRequired,
  totalStake: PropTypes.number.isRequired
}

const PageContainer = ({ history, totalStake }) => {
  const goBack = () => {
    history.push('/betslip')
  }

  return (
    <PageLayout
      goBack={goBack}
      totalStake={totalStake}
    />
  )
}

PageContainer.propTypes = propTypes

const mapStateToProps = state => ({
  totalStake: state.Betslip.totalStake
})

const ConnectedPageContainer = compose(
  connect(
    mapStateToProps
  ),
  withRouter
)(PageContainer)

export { ConnectedPageContainer as PageContainer }
