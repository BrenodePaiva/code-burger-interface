import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [taxa] = useState(5)

  const { cartProducts } = useCart()

  useEffect(() => {
    const sumItems = cartProducts.reduce((acc, currency) => {
      return currency.price * currency.quantity + acc
    }, 0)

    setFinalPrice(sumItems)
  }, [cartProducts])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando pedido...',
      success: 'Pedido Realizado',
      error: 'Falha ao teantar realizar o pedido, tente novamente'
    })
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="price">{formatCurrency(finalPrice)}</p>
          <p className="taxa">Taxa de entrega</p>
          <p className="taxa-price">{formatCurrency(taxa)}</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + taxa)}</p>
        </div>
      </Container>

      <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>
        Finalizar pedido
      </Button>
    </div>
  )
}
