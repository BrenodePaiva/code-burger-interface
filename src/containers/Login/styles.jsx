import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 88%;
`

export const ContainerItens = styled.div`
  border-radius: 0 10px 10px 0;
  background: #373737;
  height: 88%;
  padding: 25px 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    line-height: 28.13px;
    text-align: center;
    margin-top: 100px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.06px;
  margin: 28px 0 5px;
`

export const Input = styled.input`
  height: 38px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  border: ${props => (props.className ? '2px solid #cc1717' : 'none')};
  outline: none;
  padding: 0 10px;
`

export const SignInLink = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
`
