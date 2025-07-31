import styled from 'styled-components'
import breakPoints from '../../styles/breakPoints'

export const PopUp = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  height: calc(100vh - 72px);
  width: 100vw;
  background-color: rgba(252, 252, 252, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  padding: 28px 0 60px;

  .pop-up-items {
    height: 100%;
    overflow-y: auto;
  }
`

export const ContentItems = styled.div`
  background-color: #fff;
  border-radius: 10px;
  /* height: 100%; */
  overflow-y: auto;
`

export const CloseWarp = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2px 4px;

  svg {
    color: #9758a6;
    font-size: 30px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const ItemsWarp = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-bottom: 2px solid #9758a6;

  &:nth-last-child(1) {
    border: none;
  }
`

export const Image = styled.div`
  border: 1px solid #a7a7a7;
  border-radius: 10px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 72px;
    border-radius: 10px;
  }
`

export const ItemsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    gap: 5px;
  }
`

export const Container = styled.div`
  min-height: calc(100vh - 72px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 60px 0;
  background-color: #efefef;
  font-size: 14px;
`

export const ContentOrder = styled.div`
  background-color: #fff;
  height: 115px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media ${breakPoints.xmedium} {
    height: 200px;
  }
`

export const DateOrder = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 47px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  border-bottom: 1px solid #bababa;
`

export const InfoOrder = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 20px;

  div {
    display: flex;
    gap: 5px;
  }

  span {
    color: #757575;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 145px;
  }

  @media ${breakPoints.xmedium} {
    flex-direction: column;
  }
`
export const Status = styled.div`
  border-radius: 10px;
  border: 1px solid #9758a6;
  padding: 8px 10px;
  text-decoration: none;
  color: #9758a6;
  width: 126px;
  display: flex;
  justify-content: center;
`
