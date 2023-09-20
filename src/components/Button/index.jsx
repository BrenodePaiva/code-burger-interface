import PropTypes from 'prop-types'
import React from 'react'

import { CButton } from './styles'

export function Button({ children, ...props }) {
  return <CButton {...props}>{children}</CButton>
}

Button.propTypes = {
  children: PropTypes.string
}
