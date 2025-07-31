import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import { ButtonStyles, Container, Input, Label, LabelUpload } from './styles'
import { ErrorMessage, LoadScreen } from '../../../components'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import paths from '../../../constants/paths'
import { toast } from 'react-toastify'
import api from '../../../services/api'

function NewCategory() {
  const [fileName, setFileName] = useState(null)
  const [load, setLoad] = useState(false)
  const { push } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome da categoria'),
    file: Yup.mixed()
      .test('required', 'Adicione uma imagem', value => {
        return value?.length > 0
      })
      .test('fileSize', 'A imagem tem que ser menor de 2mb', value => {
        return value[0]?.size <= 2097152
      })
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const categoryDataFormatData = new FormData()

    categoryDataFormatData.append('name', data.name)
    categoryDataFormatData.append('file', data.file[0])

    try {
      setLoad(true)
      await toast.promise(api.post('categories', categoryDataFormatData), {
        pending: 'Criando nova categoria...',
        success: 'Categoria criado com sucesso',
        error: 'Falha ao criar o categoria'
      })

      setTimeout(() => {
        push(paths.Categories)
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
          <LabelUpload>
            {fileName || (
              <>
                <DriveFolderUploadIcon /> Carregue a imagem da categoria
              </>
            )}
            <Input
              type="file"
              accept="image/png, image/jpeg, image/svg+xml"
              {...register('file')}
              onChange={value => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <ButtonStyles>Adicionar categoria</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewCategory
