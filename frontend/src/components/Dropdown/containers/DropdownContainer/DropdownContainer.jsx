import React from 'react'

import { Dropdown } from 'components/Dropdown/components'

export const DropdownContainer = ({ onChange, ...props }) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const { options, value } = props
  const selectedOption = React.useMemo(
    () => options.find(o => o.value === value) || options.find(option => option.default),
    [value, options]
  )

  const onChangeOption = (option) => {
    setIsVisible(false)
    onChange(option)
  }

  return (
    <Dropdown
      {...props}
      isVisible={isVisible}
      onChange={onChangeOption}
      selectedOption={selectedOption}
      setIsVisible={setIsVisible}
    />
  )
}
