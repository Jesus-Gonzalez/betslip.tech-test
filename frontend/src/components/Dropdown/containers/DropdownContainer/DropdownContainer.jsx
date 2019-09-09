import React from 'react'

import { Dropdown } from 'components/Dropdown/components'

export const DropdownContainer = ({ onChange, ...props }) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const onChangeOption = (option) => {
    setIsVisible(false)
    onChange && onChange(option)
  }

  const hideSelector = React.useCallback((event) => {
    if (!event.target.dataset.dropdownClickable) {
      setIsVisible(false)
    }
  }, [setIsVisible])

  const _setIsVisible = (isVisible) => {
    setIsVisible(isVisible)

    const crudEventListener = isVisible
      ? document.addEventListener
      : document.removeEventListener

    crudEventListener('click', hideSelector)
  }

  return (
    <Dropdown
      {...props}
      isVisible={isVisible}
      onChange={onChangeOption}
      setIsVisible={_setIsVisible}
    />
  )
}
