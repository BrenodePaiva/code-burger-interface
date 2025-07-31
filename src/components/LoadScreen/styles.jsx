import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(252, 252, 252, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  .spinner {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 6px solid #f7f7ff;
    border-top-color: #9758a6;
    will-change: transform;
  }
`
