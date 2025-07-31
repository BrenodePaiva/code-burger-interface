import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, DeleteIconStyles, EditIconStyles, Img } from './styles'
import { useHistory } from 'react-router-dom'

function ListCategoires() {
  const [categories, setCategories] = useState()
  const { push } = useHistory()

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategory()
  }, [])

  function editCategory(category) {
    push({ pathname: paths.Editcategory, state: { category } })
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell>Edit/Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories &&
              categories.map(category => (
                <TableRow
                  key={category.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" width="256px">
                    {category.name}
                  </TableCell>
                  <TableCell>
                    <Img src={category.url} alt="categoria-imagem" />
                  </TableCell>
                  <TableCell>
                    <EditIconStyles onClick={() => editCategory(category)} />
                    <DeleteIconStyles />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListCategoires
