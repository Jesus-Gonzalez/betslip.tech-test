import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Form as ReduxForm } from 'redux-form'
import { withRouter } from 'react-router'

import { onSubmit as onSubmitAction } from 'store/actions/betslip'

import { Form, Loading } from 'pages/betslip/components'

import { validate } from 'pages/betslip/helpers'

const propTypes = {
  bets: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitSucceeded: PropTypes.bool.isRequired
}

const FormContainer = ({
  bets,
  handleSubmit,
  history,
  isLoading,
  submitSucceeded
}) => {
  React.useEffect(
    () => {
      if (!submitSucceeded) return

      history.push('/betslip/success')
    },
    [submitSucceeded]
  )

  return (
    <ReduxForm
      onSubmit={handleSubmit}
    >
      {
        isLoading
          ? <Loading />
          : <Form bets={bets} />
      }
    </ReduxForm>
  )
}

FormContainer.propTypes = propTypes

const mapStateToProps = state => ({
  bets: state.Betslip.bets,
  isLoading: state.Betslip.isLoading
})

const mapDispatchToProps = dispatch => ({
  onSubmit: compose(dispatch, onSubmitAction)
})

const ConnectedFormContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: 'betslip.form',
    validate
  }),
  withRouter
)(FormContainer)

export { ConnectedFormContainer as FormContainer }
