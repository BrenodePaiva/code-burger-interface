import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React, { useState, useMemo } from 'react'

import api from '../../../services/api'
import status from './order-status'
import { ProductImg, ReactSelectStyle, TrashStyled } from './styles'
import { toast } from 'react-toastify'
import socket from '../../../services/socketService'
import { LoadScreen } from '../../../components/LoadScreen'

function Row({ row, setOrders, orders }) {
  const [open, setOpen] = React.useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function setNewStatus(id, status) {
    setIsLoading(true)
    try {
      await api.put(`orders/${id}`, { status })
      const newOrders = orders.map(order => {
        return order.id === id ? { ...order, status } : order
      })

      setOrders(newOrders)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const delivered = useMemo(() => {
    return row.status === 'Entregue'
  }, [row])

  const delOrder = async id => {
    try {
      await toast.promise(api.delete(`orders/${id}`), {
        pending: 'Verificando....',
        success: 'Pedido deletado',
        error: 'Erro ao deletar o Pedido'
      })
    } catch (error) {
      toast.error('Erro: ', error)
    }
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <ReactSelectStyle
            options={status.filter(sts => sts.value !== 'Todos')}
            menuPortalTarget={document.body}
            placeholder="Status"
            // defaultValue={status.find(option => option.value === row.status)}
            value={status.find(option => option.value === row.status)}
            onChange={newStatus => {
              setNewStatus(row.orderId, newStatus.value)
            }}
            isLoading={isLoading}
          />

          {delivered ? (
            <TrashStyled
              style={{ fontSize: '30px' }}
              onClick={() => delOrder(row.orderId)}
            />
          ) : (
            <div style={{ width: '30px' }}></div>
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Quantidade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map(productRow => (
                    <TableRow key={productRow.id}>
                      <TableCell>
                        <ProductImg
                          src={productRow.product.url}
                          alt="produto-imagem"
                        />
                      </TableCell>
                      <TableCell>{productRow.product.name}</TableCell>
                      <TableCell component="th" scope="row">
                        {productRow.quantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

Row.propTypes = {
  orders: PropTypes.array,
  setOrders: PropTypes.func,
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        product: PropTypes.shape({
          name: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired
        })
      })
    ).isRequired
  }).isRequired
}

export default Row
