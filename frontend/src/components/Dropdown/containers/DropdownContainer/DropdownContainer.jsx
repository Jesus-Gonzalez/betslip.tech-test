import React from 'react'

import { Dropdown } from 'components/Dropdown/components'

export const DropdownContainer = ({ onChange, ...props }) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const onChangeOption = (option) => {
    setIsVisible(false)
    onChange && onChange(option)
  }

  return (
    <Dropdown
      {...props}
      isVisible={isVisible}
      onChange={onChangeOption}
      setIsVisible={setIsVisible}
    />
  )
}
