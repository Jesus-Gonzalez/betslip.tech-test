import React from 'react'
import PropTypes from 'prop-types'

import {
  DropdownSelector,
  DropdownTrigger,
  DropdownWrapper
} from 'components/Dropdown/components'

export const Dropdown = ({ isVisible, ...props }) => (
  <DropdownWrapper {...props}>
    <DropdownTrigger
      {...props}
    />
    {isVisible && <DropdownSelector {...props} />}
  </DropdownWrapper>
)

Dropdown.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired
}
