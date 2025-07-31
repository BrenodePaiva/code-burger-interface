import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import {
  Admin,
  Cart,
  ForgotPass,
  Home,
  Login,
  MyOrder,
  PageNotFound,
  Products,
  Register,
  ResetPass,
  UserEdit
} from '../containers'
import PriveteRountes from './private-route'

function Routes() {
  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Login></Login>
      </GoogleOAuthProvider>
    )
  }
  return (
    <Router>
      <Switch>
        <Route path="/login" component={GoogleAuthWrapper} />
        <Route path="/esqueceu-senha" component={ForgotPass} />
        <Route path="/resetar-senha/:token" component={ResetPass} />
        <Route path="/cadastro" component={Register} />
        <PriveteRountes exact path="/" component={Home} />
        <PriveteRountes path="/user-edit" component={UserEdit} />
        <PriveteRountes path="/meus-pedidos" component={MyOrder} />
        <PriveteRountes path="/produtos" component={Products} />
        <PriveteRountes path="/carrinho" component={Cart} />

        <PriveteRountes path={paths.Order} component={Admin} isAdmin />
        <PriveteRountes path={paths.Products} component={Admin} isAdmin />
        <PriveteRountes path={paths.NewProduct} component={Admin} isAdmin />
        <PriveteRountes path={paths.EditProduct} component={Admin} isAdmin />
        <PriveteRountes path={paths.Categories} component={Admin} isAdmin />
        <PriveteRountes path={paths.NewCategoty} component={Admin} isAdmin />

        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
