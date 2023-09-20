import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProvaider from './hooks'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppProvaider>
      <Routes />
    </AppProvaider>
    <ToastContainer position="top-center" autoClose={900} />
    <GlobalStyles />
  </>
)
