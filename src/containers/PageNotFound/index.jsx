import React from 'react'
import { useHistory } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Container } from './styles'

export function PageNotFound() {
  const user = localStorage.getItem('codeburger:userData')
  const { push } = useHistory()

  return (
    <>
      {user ? <Header /> : <a onClick={() => push('/')}>Voltar</a>}
      <Container>
        <h1>Page Not Found</h1>
        <h2>Erro 404</h2>
      </Container>
    </>
  )
}
