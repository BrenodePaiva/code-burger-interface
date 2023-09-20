import React from 'react'

import CartLogo from '../../assets/cart-image.svg'
import { CartItems, CartResume } from '../../components'
import { CartImage, Conatiner, Wrapper } from './styles'

export function Cart() {
  return (
    <Conatiner>
      <CartImage src={CartLogo} alt="Carrinho-Banner" />

      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Conatiner>
  )
}
