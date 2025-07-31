import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useMemo, useRef, useState } from 'react'

import api from '../../../services/api'
import formatDate from '../../../utils/formatDate'
import status from './order-status'
import Row from './row'

import { Container, LinkMenu, Menu } from './styles'
import socket from '../../../services/socketService'

function Orders() {
  const [orders, setOrders] = useState([])
  const [items, setItems] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [activeStatus, setActiveStatus] = useState(1)
  const hasInitialized = useRef(false)

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get(`orders/${0}`)
      setOrders(data.allOrders)
      setItems(data.items)
      console.log(data)

      if (!hasInitialized.current) {
        hasInitialized.current = true

        socket.emit('join-room', 'kitchen')

        socket.on('new-order', ({ order, items }) => {
          console.log('New Order: ', { order, items })

          setOrders(prevOrder => [order, ...prevOrder])
          setItems(prevItems => [...items, ...prevItems])
        })

        socket.on('updated-all-order', updateOrder => {
          console.log('Updated order: ', updateOrder)

          setOrders(prev =>
            prev.map(ord =>
              ord.id === updateOrder.id ? { ...ord, ...updateOrder } : ord
            )
          )
        })

        socket.on('delete-order', id => {
          console.log('Deleted Order: ', id)

          setOrders(prevOrder => prevOrder.filter(order => order.id !== id))
        })
      }

      return () => {
        socket.off('new-order')
        socket.off('updated-all-order')
        socket.off('delete-order')
      }
    }
    loadOrders()
  }, [])

  console.log(orders)

  function createData(order, items) {
    return {
      orderId: order.id,
      name: order.user.name,
      date: formatDate(order.createdAt),
      status: order.status,
      products: items
    }
  }

  function filterItems(id) {
    const orderItems = items.filter(item => item.order_id === id)
    return orderItems
  }

  function handleStatus(status) {
    if (status.id === 1) {
      setFilteredOrders(orders)
    } else {
      const newOrders = orders.filter(ord => ord.status === status.value)
      setFilteredOrders(newOrders)
    }
    setActiveStatus(status.id)
  }

  const rows = useMemo(() => {
    return filteredOrders.map(ord => createData(ord, filterItems(ord.id)))
  }, [filteredOrders])

  useEffect(() => {
    if (activeStatus === 1) {
      setFilteredOrders(orders)
    } else {
      const statusIndex = status.findIndex(sts => sts.id === activeStatus)
      const newFilteredOrders = orders.filter(
        order => order.status === status[statusIndex].value
      )
      setFilteredOrders(newFilteredOrders)
    }
  }, [orders])

  return (
    <Container>
      <Menu>
        {status &&
          status.map(sts => (
            <LinkMenu
              key={sts.id}
              onClick={() => handleStatus(sts)}
              isActive={activeStatus === sts.id}
            >
              <p>{sts.label}</p>
            </LinkMenu>
          ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders
