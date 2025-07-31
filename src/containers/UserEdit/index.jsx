import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import {
  ButtonStyles,
  Container,
  Field,
  Input,
  Label,
  UserInfo
} from './styles'
import { ErrorMessage, LoadScreen } from '../../components'
import { useUser } from '../../hooks/UserContext'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export function UserEdit() {
  const { userData, logout } = useUser()
  const [load, setLoad] = useState(false)
  const history = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('O campo nome não pode ficar vazio'),
    password: Yup.string(),
    newPassword: Yup.string().when('password', {
      is: val => val && val.length !== 0,
      then: schema =>
        schema
          .required('Nova senha obrigatória ao alterar senha')
          .min(6, 'A senha de ter pelo menos 6 digitos')
    }),
    confirmPass: Yup.string().oneOf(
      [Yup.ref('newPassword')],
      'As senhas devem ser iguais'
    )
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  useEffect(() => {
    if (userData) {
      reset({ name: userData.name })
    }
  }, [userData])

  const onSubmit = async data => {
    try {
      setLoad(true)
      const { status } = await api.put(`users/${userData.email}`, data, {
        validateStatus: () => true
      })
      if (status === 200) {
        toast.success('Informações alteradas')

        setTimeout(() => {
          logout()
          history.replace('/login')
        }, 500)
      } else if (status === 401) {
        toast.warning('Certifique-se de que sua senha atual esteja correta')
      } else if (status !== 500) {
        toast.error('Ao deu errado, tente novamente mais tarde')
      }
    } catch (err) {
      toast.error('Falha no sistema. Erro: ', err)
    } finally {
      setLoad(false)
    }
  }

  return (
    <Container>
      {load && <LoadScreen />}

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <UserInfo>
          <h2>
            <ManageAccountsIcon fontSize="large" />
            Configuração
          </h2>
          <h3>{userData.email}</h3>
          <AccountCircleIcon style={{ fontSize: '90px' }} />
        </UserInfo>
        <Field>
          <div>
            <Label>Nome</Label>
          </div>
          <Input
            type="text"
            {...register('name')}
            defaultValue={userData.name}
            className={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </Field>

        {!userData.google_id && (
          <>
            <h2 className="text">Alterar Senha</h2>

            <Field>
              <div>
                <Label>Senha Atual</Label>
              </div>
              <Input
                type="password"
                {...register('password')}
                className={errors.password?.message}
              />
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </Field>

            <Field>
              <div>
                <Label>Nova Senha</Label>
              </div>
              <Input
                type="text"
                {...register('newPassword')}
                className={errors.newPassword?.message}
              />
              <ErrorMessage>{errors.newPassword?.message}</ErrorMessage>
            </Field>

            <Field>
              <div>
                <Label>Confirmar Senha</Label>
              </div>
              <Input
                type="text"
                {...register('confirmPass')}
                className={errors.confirmPass?.message}
              />
              <ErrorMessage>{errors.confirmPass?.message}</ErrorMessage>
            </Field>
          </>
        )}

        <ButtonStyles>Alterar</ButtonStyles>
      </form>
    </Container>
  )
}
