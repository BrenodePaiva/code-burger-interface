import styled from 'styled-components'
import { Button } from '../../components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0 30px;
  background-color: #efefef;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 400px;

    .text {
      text-align: center;
      color: #fff;
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  h2 {
    display: flex;
    align-items: end;
    gap: 7px;
    margin-bottom: 3px;
  }

  h3 {
    font-weight: 300;
    margin-bottom: 13px;
  }
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Label = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 3px;
  width: 230px;
`

export const Input = styled.input`
  height: 40px;
  width: 230px;
  background: #fff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
  outline: none;
  padding-left: 10px;
`

export const LabelUpload = styled.label`
  height: 40px;
  min-width: 297px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #fff;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`

export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 25px;
`
