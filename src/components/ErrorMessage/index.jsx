import PropTypes from 'prop-types'
import React from 'react'

import { Container } from './styles'

export function ErrorMessage({ children }) {
  return <Container>{children}</Container>
}

ErrorMessage.propTypes = {
  children: PropTypes.string
}
