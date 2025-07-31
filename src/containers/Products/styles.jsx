import styled from 'styled-components'
import breakPoints from '../../styles/breakPoints'

export const Container = styled.div`
  background-color: #e5e5e5;
  min-height: calc(100vh - 72px);
`

export const ProductsImg = styled.img`
  width: 100%;
`

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props =>
    props.isActive ? '2px solid #9758a6' : '2px solid rgba(0, 0, 0, 0)'};
  color: ${props => (props.isActive ? '#9758a6' : '#9a9a9d')};
  font-size: 17px;
  padding-bottom: 5px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 390px);
  gap: 20px;
  padding: 40px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media ${breakPoints.big} {
    grid-template-columns: repeat(2, 390px);
  }

  @media ${breakPoints.xbig} {
    grid-template-columns: repeat(1, 390px);
  }
`
