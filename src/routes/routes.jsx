import React from 'react'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Admin, Cart, Home, Login, Products, Register } from '../containers'
import PriveteRountes from './private-route'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
        <PriveteRountes exact path="/" component={Home} />
        <PriveteRountes path="/produtos" component={Products} />
        <PriveteRountes path="/carrinho" component={Cart} />

        <PriveteRountes path={paths.Order} component={Admin} isAdmin />
        <PriveteRountes path={paths.Products} component={Admin} isAdmin />
        <PriveteRountes path={paths.NewProduct} component={Admin} isAdmin />
        <PriveteRountes path={paths.EditProduct} component={Admin} isAdmin />
      </Switch>
    </Router>
  )
}

export default Routes
