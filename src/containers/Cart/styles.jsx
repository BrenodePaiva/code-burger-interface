import styled from 'styled-components'
import breakPoints from '../../styles/breakPoints'

export const Conatiner = styled.div`
  background-color: #e5e5e5;
  min-height: calc(100vh - 72px);
`

export const CartImage = styled.img`
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px 0;
  margin-top: 30px;
  padding: 0 10px 40px;

  @media ${breakPoints.big} {
    align-items: center;
    flex-direction: column;

    .resume-content {
      width: 820px;
      display: flex;
      justify-content: end;

      @media ${breakPoints.xbig} {
        width: 100%;
      }
    }
  }
`
