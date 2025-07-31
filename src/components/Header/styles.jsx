import styled from 'styled-components'
import breakPoints from '../../styles/breakPoints'

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
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
  color: ${props => (props['data-is-active'] ? '#9758a6' : '#555555')};
  font-size: 16px;
  font-weight: ${props => (props['data-is-active'] ? 'bold' : 'normal')};
`

export const ContainerRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const NavBurgue = styled.div`
  display: none;
  cursor: pointer;

  @media ${breakPoints.xmedium} {
    display: block;

    div {
      width: 2rem;
      height: 0.2rem;
      margin: 0.4rem 0;
      background: #9758a6;
      transition: all 0.4s ease-in-out;
    }

    ${props =>
      props['data-is-mobile'] &&
      `
      .line1 {
        transform: rotate(-45deg) translate(-6px, 10px);
      }
      .line2 {
        opacity: 0;
      }
      .line3 {
        transform: rotate(45deg) translate(-3px, -7px);
      }
  `}
  }
`

export const NavMobile = styled.div`
  height: auto;
  padding: 10px;
  overflow: hidden;
  transition: height 0.4s ease-in-out;
  display: flex;
  align-items: center;
  gap: 20px;
  background: #fff;

  .line {
    height: 40px;
    border: 1px solid #bababa;
  }

  @media ${breakPoints.xmedium} {
    position: absolute;
    top: 54px;
    right: 0;
    width: 250px;
    height: ${props => (props['data-is-mobile'] ? '68px' : 0)};
    padding: 0px 10px;
  }
`

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 10px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  ${props =>
    props['data-open-box'] &&
    `
      box-shadow: rgba(3, 3, 3, 0.12) 0px 1px 1px 3px;
      border-radius: 8px;
    `}

  &:hover {
    box-shadow: rgba(3, 3, 3, 0.12) 0px 1px 1px 3px;
    border-radius: 8px;
  }
`

export const UserImg = styled.div``

export const ContainerText = styled.div`
  font-size: 14px;
  color: #555555;
  font-weight: 300;
`

export const SettingsBox = styled.div`
  position: absolute;
  top: 68px;
  right: 7px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: rgba(3, 3, 3, 0.12) 0px 1px 1px 3px;
  border-radius: 8px;
  width: auto;
  /* height: 0; */
  font-size: 14px;
  width: 200px;
  opacity: 0;
  z-index: -1;
  pointer-events: none;
  ${props =>
    props['data-open-box'] &&
    `
      opacity: 1; 
      z-index: 1;
      pointer-events: all;
    `}
  transition: opacity 0.4s ease-in-out, z-index 0.4s ease-in-out;

  @media ${breakPoints.xmedium} {
    top: 121px;
    right: 14px;
  }
`

export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 8px 10px 3px;
  margin-bottom: 10px;
  border-bottom: 1px solid #555555;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;
  }

  span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 300;
    font-size: 12px;
    width: 200px;
  }
`

export const SettingsItens = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  margin: 3px 0;
  background-color: ${props => (props['data-is-active'] ? '#f2f0ef' : '')};
  cursor: pointer;

  &:nth-last-child(1) {
    margin-bottom: 10px;
  }

  &:hover {
    background-color: #f2f0ef;
  }
`
