export const validate = (values) => {
  // console.log('values', values.be)
  const nextErrors = {}

  if (!values.bet) {
    Object.assign(nextErrors, {
      _error: 'You must enter stakes to submit the form'
    })
  }

  return nextErrors
}
