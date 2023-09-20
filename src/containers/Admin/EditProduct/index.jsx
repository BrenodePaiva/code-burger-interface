import { yupResolver } from '@hookform/resolvers/yup'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import paths from '../../../constants/paths'
import api from '../../../services/api'
import {
  ButtonStyles,
  Container,
  ContainerInput,
  Input,
  Label,
  LabelUpload
} from './styles'

function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setContegories] = useState([])
  const {
    push,
    location: {
      state: { product }
    }
  } = useHistory()

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setContegories(data)
    }

    loadCategories()
  }, [])

  const schema = Yup.object().shape({
    name: Yup.string(),
    price: Yup.number(),
    category: Yup.object(),
    offer: Yup.bool()
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const productFormatData = new FormData()

    productFormatData.append('name', data.name)
    productFormatData.append('price', data.price)
    productFormatData.append('file', data.file[0])
    productFormatData.append('category_id', data.category.id)
    productFormatData.append('offer', data.offer)

    await toast.promise(api.put(`products/${product.id}`, productFormatData), {
      pending: 'Editando produto....',
      success: 'Produto editado com sucesso',
      error: 'Falha ao editar o produto'
    })

    setTimeout(() => {
      push(paths.Products)
    }, 900)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register('price')}
            defaultValue={product.price}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload>
            {fileName || (
              <>
                <DriveFolderUploadIcon /> Carregue a imagem do produto
              </>
            )}
            <Input
              type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={value => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <div>
          <Controller
            name="category"
            control={control}
            defaultValue={product.category}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={cat => cat.id}
                  defaultValue={product.category}
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ContainerInput>
          <input
            type="checkbox"
            {...register('offer')}
            defaultChecked={product.offer}
          />
          <Label>Produto em oferta?</Label>
        </ContainerInput>

        <ButtonStyles>Editar produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default EditProduct
