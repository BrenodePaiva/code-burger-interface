import { yupResolver } from '@hookform/resolvers/yup'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage, LoadScreen } from '../../../components'
import paths from '../../../constants/paths'
import api from '../../../services/api'
import { ButtonStyles, Container, Input, Label, LabelUpload } from './styles'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const [load, setLoad] = useState(false)
  const { push } = useHistory()

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }

    loadCategories()
  }, [])

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
      .test('required', 'Adicione uma imagem', value => {
        return value?.length > 0
      })
      .test('fileSize', 'A imagem tem que ser menor de 2mb', value => {
        return value[0]?.size <= 200000
      })
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const productDataFormatData = new FormData()

    productDataFormatData.append('name', data.name)
    productDataFormatData.append('price', data.price)
    productDataFormatData.append('file', data.file[0])
    productDataFormatData.append('category_id', data.category.id)

    try {
      setLoad(true)
      await toast.promise(api.post('products', productDataFormatData), {
        pending: 'Criando novo produto...',
        success: 'Produto criado com sucesso',
        error: 'Falha ao criar o produto'
      })

      setTimeout(() => {
        push(paths.Products)
      }, 500)
    } finally {
      setLoad(false)
    }
  }

  return (
    <Container>
      {load && <LoadScreen />}
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
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
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={cat => cat.id}
                  placeholder="Categorias"
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ButtonStyles>Adicionar produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewProduct

/*
Input

Não controlados: Eles guardam o valor neles mesmos

Controlados: Eles precisam de ajuda para guardar os valores deles 
*/
