import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import { CategoryCarrousel, OffersCarrousel } from '../../components'
import { Container, HomeImg } from './styles'

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo-home" />
      <CategoryCarrousel />
      <OffersCarrousel />
    </Container>
  )
}
