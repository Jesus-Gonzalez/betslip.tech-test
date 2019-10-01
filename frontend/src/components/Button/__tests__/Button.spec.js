import React from 'react'
import { shallow } from 'enzyme'

import { Button } from 'components'

describe('components(Button)', () => {
  it('should render', () => {
    const button = shallow(<Button />).html()

    expect(button).toMatchSnapshot()
  })

  it('should render className prop', () => {
    const button = shallow(<Button className="test-class" />).html()

    expect(button).toMatchSnapshot()
  })

  it('should render type submit on submit prop', () => {
    const button = shallow(<Button submit />).html()

    expect(button).toMatchSnapshot()
  })

  it('should render innerText on button component', () => {
    const button = shallow(<Button submit>Submit form</Button>).html()

    expect(button).toMatchSnapshot()
  })

  it('should render rest props', () => {
    const fn = jest.fn(event => event)
    const button = shallow(<Button onClick={fn}>Click event simulation</Button>)
    button.find('button').simulate('click')

    expect(fn).toHaveBeenCalled()
  })
})
