import PropTypes from 'prop-types'
import React from 'react'

import { CartProvaider } from './CartContext'
import { UserProvider } from './UserContext'

const appProvaider = ({ children }) => (
  <CartProvaider>
    <UserProvider>{children}</UserProvider>
  </CartProvaider>
)

appProvaider.propTypes = {
  children: PropTypes.node
}

export default appProvaider
