import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items price'
      'taxa taxa-price';

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }
    .items {
      grid-area: items;
    }
    .price {
      grid-area: price;
    }
    .taxa {
      grid-area: taxa;
    }
    .taxa-price {
      grid-area: taxa-price;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
  }
`
