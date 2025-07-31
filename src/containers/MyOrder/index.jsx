import React, { useEffect, useState } from 'react'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'
import {
  CloseWarp,
  Container,
  ContentItems,
  ContentOrder,
  DateOrder,
  Image,
  InfoOrder,
  ItemsWarp,
  ItemsInfo,
  PopUp,
  Status
} from './styles'
import api from '../../services/api'
import { useUser } from '../../hooks/UserContext'
import formatDate from '../../utils/formatDate'
import socket from '../../services/socketService'

export function MyOrder() {
  const [popUp, setPopUp] = useState(false)
  const { userData } = useUser()
  const [orders, setOrders] = useState([])
  const [items, setItems] = useState([])
  const [orderId, setOrderId] = useState()

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get(`orders/${userData.id}`)

      setOrders(data.allOrders)
      setItems(data.items)

      // Entra na sala exclusiva do cliente
      socket.emit('join-room', `client-${userData.id}`)

      // Escuta atualização de pedido
      socket.on('updated-order', orderUpdated => {
        // Atualizar o estado, UI, notificação, etc.
        setOrders(prev =>
          prev.map(ord =>
            ord.id === orderUpdated.id ? { ...ord, ...orderUpdated } : ord
          )
        )
      })

      // Cleanup
      return () => {
        socket.off('updated-order')
      }
    }
    loadOrders()
  }, [userData.id])

  return (
    <Container>
      {popUp && (
        <PopUp>
          <div className="pop-up-items">
            <ContentItems>
              <CloseWarp
                onClick={() => {
                  setPopUp(false)
                }}
              >
                <CancelPresentationIcon />
              </CloseWarp>

              {items
                .filter(item => item.order_id === orderId)
                .map(item => (
                  <ItemsWarp key={item.id}>
                    <Image>
                      <img src={item.product.url} />
                    </Image>
                    <ItemsInfo>
                      <p>{item.product.name}</p>
                      <div>
                        <span>Quantidade: </span> <p>{item.quantity}</p>
                      </div>
                    </ItemsInfo>
                  </ItemsWarp>
                ))}
            </ContentItems>
          </div>
        </PopUp>
      )}

      {orders.map(order => (
        <ContentOrder
          onClick={() => {
            setPopUp(true)
            setOrderId(order.id)
          }}
          key={order.id}
        >
          <DateOrder>{formatDate(order.createdAt)}</DateOrder>

          <InfoOrder>
            <div>
              <span>Pedido: </span> <p>{order.id}</p>
            </div>

            <div>
              <span>Nome: </span> <p>{order.user.name}</p>
            </div>

            <Status>{order.status}</Status>
          </InfoOrder>
        </ContentOrder>
      ))}
    </Container>
  )
}
