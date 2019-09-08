import React from 'react'
import classnames from 'classnames'

import { RenderInput } from 'components'

import styles from './styles.module.scss'

const hasNonNumbersRegex = /[^,\d]/
const removeNonNumberChars = (value, prevValue) => {
  const nextValue = String(value).split('.').join(',')
  const isNextValueValid = [
    nextValue.split(',').length <= 2,
    !hasNonNumbersRegex.test(nextValue)
  ].every(condition => condition)

  return isNextValueValid ? nextValue : prevValue || ''
}

export const NumericInput = ({ className, ...props }) => {
  const inputClass = React.memo(
    () => classnames(className, styles.input),
    [className]
  )

  return (
    <RenderInput
      className={inputClass}
      normalize={removeNonNumberChars}
      {...props}
    />
  )
}
