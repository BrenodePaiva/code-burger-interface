import styled from 'styled-components'

import Background from '../../assets/background.svg'
import RegisterMobile from '../../assets/register-img-mobile.png'
import RegisterImg from '../../assets/register-image.svg'
import breakPoints from '../../styles/breakPoints'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    height: 96%;
    width: 464.266px;
    background-image: url('${RegisterImg}');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px 0 0 10px;
  }

  @media ${breakPoints.xbig} {
    flex-direction: column;

    .image {
      height: 60px;
      width: 404px;
      background-image: url('${RegisterMobile}');
      border-radius: 10px 10px 0 0;
    }
  }

  @media ${breakPoints.xsmall} {
    width: 98%;
  }
`

export const ContainerItens = styled.div`
  border-radius: 0 10px 10px 0;
  background: #373737;
  height: 96%;
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
    margin-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  @media ${breakPoints.xbig} {
    border-radius: 0 0 10px 10px;
  }

  @media ${breakPoints.xsmall} {
    width: 98%;
  }
`

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.06px;
  margin-top: ${props => (props.className ? '12px' : '28px')};
  margin-bottom: 5px;
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

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
