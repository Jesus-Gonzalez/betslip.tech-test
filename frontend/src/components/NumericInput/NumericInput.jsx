import React from 'react'

import { RenderInput } from 'components'

const hasNonNumbersRegex = /[^,\d]/
const removeNonNumberChars = (value, prevValue) => {
  const nextValue = String(value).split('.').join(',')
  const isNextValueValid = [
    nextValue.split(',').length <= 2,
    !hasNonNumbersRegex.test(nextValue)
  ].every(condition => condition)

  return isNextValueValid ? nextValue : prevValue || ''
}

export const NumericInput = ({ className, ...props }) => (
  <RenderInput
    normalize={removeNonNumberChars}
    {...props}
  />
)
