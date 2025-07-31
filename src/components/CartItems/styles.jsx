import styled from 'styled-components'
import breakPoints from '../../styles/breakPoints'

export const Container = styled.div`
  background-color: #fff;
  filter: drop-shadow(0px 10px 40px rgba(0, 0, 0, 0.03));
  border-radius: 20px;
  padding: 10px;
  width: max-content;

  @media ${breakPoints.xbig} {
    display: none;
  }
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 120px 156px 120px 120px 120px;
  grid-gap: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #b5b5b5;
`

export const Label = styled.div`
  font-size: 16px;
  color: #b5b5b5;
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: 120px 156px 120px 120px 120px;
  grid-gap: 15px 20px;
  width: 800px;
  padding: 10px 0;
`

export const ImgStyled = styled.img`
  border-radius: 10px;
  width: 120px;
`

export const QuantityBnt = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  height: 30px;
  font-size: 24px;
  margin-top: -6px;
`

export const QuantityC = styled.div`
  display: flex;
  gap: 20px;

  button {
    border: none;
    cursor: pointer;
    background: transparent;
    height: 30px;
    font-size: 28px;
    margin-top: -6px;
    color: #9758a6;
  }
`

export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`

export const CMobile = styled.div`
  display: none;

  @media ${breakPoints.xbig} {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    background-color: #fff;
    filter: drop-shadow(0px 10px 40px rgba(0, 0, 0, 0.03));
    border-radius: 20px;
    padding: 10px;
    width: max-content;
    padding: 10px;
    border-radius: 20px;
    width: 100%;
  }
`
export const BodyM = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: s; */
  /* justify-content: space-between; */
  /* width: 100%; */
  gap: 20px;
  .linha {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #b5b5b5;
  }
`
