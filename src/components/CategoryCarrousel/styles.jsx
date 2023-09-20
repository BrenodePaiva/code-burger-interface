import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid #9758a6;

    color: #efefef;
  }

  .rec.rec-arrow:hover {
    background-color: #efefef;

    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    background-color: #bebebf;
    border: 1px solid #bebebf;
    color: #efefef;
  }

  button.rec-dot:active {
    background-color: #9758a6;
  }
`

export const CategoryImg = styled.img``

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  margin-top: 16px;
  border-radius: 8px;
  background: #9758a6;
  box-shadow:
    0px 20px 40px 0px rgba(151, 88, 166, 0.24),
    0px 5px 10px 0px rgba(151, 88, 166, 0.22);
  height: 50px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 100%; /* 24px */

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
