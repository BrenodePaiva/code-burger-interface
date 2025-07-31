import ReactSelect from 'react-select'
import styled from 'styled-components'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

export const Container = styled.div`
  background-color: #efefef;
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 50px;
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
  width: 200px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`

export const TrashStyled = styled(DeleteForeverIcon)`
  color: red;
  cursor: pointer;

  /* .MuiSvgIcon-fontSizeMedium {
    font-size: 100px;
  } */
`
