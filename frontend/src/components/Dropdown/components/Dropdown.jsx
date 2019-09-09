import React from 'react'
import PropTypes from 'prop-types'

import {
  DropdownSelector,
  DropdownTrigger,
  DropdownWrapper
} from 'components/Dropdown/components'

export const Dropdown = React.forwardRef((props, ref) => {
  const { isVisible } = props

  return (
    <DropdownWrapper {...props}>
      <DropdownTrigger {...props} />
      {isVisible && <DropdownSelector {...props} />}
    </DropdownWrapper>
  )
})

Dropdown.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired
}
