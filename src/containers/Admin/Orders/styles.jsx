import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  min-height: 100vh;
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 20px 0;
`

export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-weight: ${props => (props.isActive ? 'bold' : '400')};
  border-bottom: ${props => (props.isActive ? '2px solid #9758a6' : 'none')};
  padding-bottom: 5px;

  p:hover {
    font-weight: bold;
  }
`

export const ProductImg = styled.img`
  width: 60px;
  border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`
