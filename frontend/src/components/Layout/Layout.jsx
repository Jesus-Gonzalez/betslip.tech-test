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
  ])
}

export const Layout = ({ children, ...props }) => (
  <Body>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </Body>
)

Layout.propTypes = propTypes
