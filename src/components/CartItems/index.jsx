import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import {
  Body,
  BodyM,
  CMobile,
  Container,
  EmptyCart,
  Header,
  ImgStyled,
  Label,
  QuantityBnt,
  QuantityC
} from './styles'

export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct } = useCart()

  return (
    <>
      <Container>
        <Header>
          <Label></Label>
          <Label>Itens</Label>
          <Label>Preço</Label>
          <Label>Quantidade</Label>
          <Label>Total</Label>
        </Header>

        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map(product => (
            <Body key={product.id}>
              <div>
                <ImgStyled src={product.url} />
              </div>
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>

              <QuantityC>
                <QuantityBnt onClick={() => decreaseProduct(product.id)}>
                  -
                </QuantityBnt>
                <p>{product.quantity}</p>
                <QuantityBnt onClick={() => increaseProduct(product.id)}>
                  +
                </QuantityBnt>
              </QuantityC>

              <p>{formatCurrency(product.quantity * product.price)}</p>
            </Body>
          ))
        ) : (
          <EmptyCart>Carrinho Vazio</EmptyCart>
        )}
      </Container>

      <CMobile>
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map(product => (
            <BodyM key={product.id}>
              <div>
                <ImgStyled src={product.url} />
              </div>
              <div className="linha">
                <Label>Item:</Label>
                <p>{product.name}</p>
              </div>
              <div className="linha">
                <Label>Preço:</Label>
                <p>{product.formatedPrice}</p>
              </div>

              <div className="linha">
                <Label>Quantidade: </Label>
                <QuantityC>
                  <QuantityBnt onClick={() => decreaseProduct(product.id)}>
                    -
                  </QuantityBnt>
                  <p>{product.quantity}</p>
                  <QuantityBnt onClick={() => increaseProduct(product.id)}>
                    +
                  </QuantityBnt>
                </QuantityC>
              </div>

              <div className="linha">
                <Label>Total: </Label>
                <p>{formatCurrency(product.quantity * product.price)}</p>
              </div>
            </BodyM>
          ))
        ) : (
          <EmptyCart>Carrinho Vazio</EmptyCart>
        )}
      </CMobile>
    </>
  )
}
