import React from 'react'
import PropTypes from 'prop-types'

import {
  Body,
  Footer,
  Header,
  Main
} from 'components/Layout/components'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string
}

const defaultProps = {
  className: ''
}

export const Layout = ({ children, className, ...props }) => (
  <Body>
    <Header />
    <Main className={className}>
      {children}
    </Main>
    <Footer />
  </Body>
)

Layout.propTypes = propTypes

Layout.defaultProps = defaultProps
