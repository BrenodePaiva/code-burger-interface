import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background-color: #fff;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758a6' : '#555555')};
  font-size: 16px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .line {
    height: 40px;
    border: 1px solid #bababa;
  }
`

export const ContainerText = styled.div`
  font-size: 14px;
  color: #555555;
  font-weight: 300;
`

export const PageLinkExit = styled.a`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #9758a6;
  cursor: pointer;
`
