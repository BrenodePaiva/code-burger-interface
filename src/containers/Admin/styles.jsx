import styled from 'styled-components'
import breakPoints from '../../styles/breakPoints'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #efefef;
`

export const ContainerItems = styled.div`
  padding: 20px;
  width: 100%;
  margin-left: 230px;
  overflow-y: auto;

  @media ${breakPoints.xbig} {
    margin-left: 50px;
  }
`
