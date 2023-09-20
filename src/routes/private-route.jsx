import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Header } from '../components'

function PriveteRountes({ component, isAdmin, ...props }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Redirect to="/login" />
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Redirect to="/" />
  }

  return (
    <>
      {!isAdmin && <Header />} <Route {...props} component={component} />
    </>
  )
}

PriveteRountes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}

export default PriveteRountes
