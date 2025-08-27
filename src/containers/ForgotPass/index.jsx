import { yupResolver } from '@hookform/resolvers/yup'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import { Button, ErrorMessage, LoadScreen } from '../../components'

import api from '../../services/api'
import {
  Container,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ContainerMessage,
  CheckStyled,
  CancelStyled
} from './styles'

export function ForgotPass() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const [loading, setLoading] = useState(false)
  const [statusCode, setStatusCode] = useState()

  const formSubmit = async formData => {
    try {
      setLoading(true)
      const { status } = await api.post(
        'forgot-password',
        {
          email: formData.email
        },
        { validateStatus: () => true }
      )

      setStatusCode(status)
    } finally {
      setLoading(false)
    }
  }

  if (!statusCode) {
    return (
      <Container>
        {loading && <LoadScreen />}

        <ContainerItens>
          <img src={Logo} alt="logo-code-burger" />
          <h1>Esqueceu a senha</h1>

          <form noValidate onSubmit={handleSubmit(formSubmit)}>
            <Label>E-mail</Label>
            <Input
              type="email"
              {...register('email')}
              className={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Button type="submit" style={{ margin: '32px 0 25px' }}>
              Enviar
            </Button>
          </form>
        </ContainerItens>
      </Container>
    )
  } else if (statusCode === 404 || statusCode === 401 || statusCode === 200) {
    return (
      <Container>
        <ContainerItens>
          <ContainerMessage>
            <h2>E-mail enviado</h2>
            <p className="text">
              Um e-mail com instruções para trocar sua senha foi envidado
            </p>

            <SignInLink>
              <Link to="/login">Voltar para o login</Link>
            </SignInLink>

            <CheckStyled />
          </ContainerMessage>
        </ContainerItens>
      </Container>
    )
  } else {
    toast.error('Algo deu errado, tente novamente mais tarde')
    return (
      <Container>
        <ContainerItens>
          <ContainerMessage>
            <h2>Algo deu errado</h2>

            <SignInLink>
              <Link to="/login">Voltar para o login</Link>
            </SignInLink>

            <CancelStyled />
          </ContainerMessage>
        </ContainerItens>
      </Container>
    )
  }
}
