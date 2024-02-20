import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import { Button, ErrorMessage } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from './styles'

export function Login() {
  const [imgLoad, setImgLoad] = useState(false)
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha de ter pelo menos 6 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando dados',
        success: 'Seja Bem-Vindo',
        error: 'Verifique seu e-mail e senha'
      }
    )
    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
    }, 500)
  }

  const imgElement = document.getElementById('image')
  imgElement.onload = () => {
    setImgLoad(true)
    console.log(imgLoad)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Imagem-burger" id="image" />
      {imgLoad && (
        <ContainerItens>
          <img src={Logo} alt="logo-code-burger" />
          <h1>Login</h1>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label>E-mail</Label>
            <Input
              type="email"
              {...register('email')}
              className={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label>Senha</Label>
            <Input
              type="password"
              {...register('password')}
              className={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Button type="submit" style={{ margin: '75px 0 25px' }}>
              Sign In
            </Button>
          </form>

          <SignInLink>
            Não possui conta?{' '}
            <Link to="/cadastro" style={{ color: '#fff' }}>
              Sign Up
            </Link>
          </SignInLink>
        </ContainerItens>
      )}
    </Container>
  )
}
