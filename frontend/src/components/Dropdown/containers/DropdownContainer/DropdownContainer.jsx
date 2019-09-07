import React from 'react'

import { Dropdown } from 'components/Dropdown/components'

export const DropdownContainer = ({ onSelectDropdownOption, ...props }) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const { options, value } = props
  const selectedOption = React.useMemo(
    () => options.find(o => o.value === value),
    [value, options]
  )

  const onSelectDropdownOptionHandler = (option) => {
    setIsVisible(false)
    onSelectDropdownOption(option)
  }

  return (
    <Dropdown
      {...props}
      isVisible={isVisible}
      onSelectDropdownOption={onSelectDropdownOptionHandler}
      selectedOption={selectedOption}
      setIsVisible={setIsVisible}
    />
  )
}
