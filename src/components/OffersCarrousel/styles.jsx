import styled from 'styled-components'
import breakPoints from '../../styles/breakPoints'

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9758a6;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid #9758a6;
    color: #efefef;

    @media ${breakPoints.xbig} {
      min-width: 38px;
      height: 38px;
      font-size: 20px;
    }

    @media ${breakPoints.xmedium} {
      min-width: 30px;
      height: 36px;
      font-size: 16px;
    }
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

export const OfferImg = styled.img`
  @media ${breakPoints.xbig} {
    height: 56px;
  }

  @media ${breakPoints.xmedium} {
    height: 43px;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #424242;
    font-size: 14px;
    font-weight: 700;
    line-height: 120%; /* 26.4px */
  }
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  margin-top: 16px;
  border-radius: 8px;
  background: #9758a6;
  box-shadow:
    0px 20px 40px 0px rgba(151, 88, 166, 0.24),
    0px 5px 10px 0px rgba(151, 88, 166, 0.22);
  height: 40px;
  border: none;
  cursor: pointer;

  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%; /* 24px */

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
