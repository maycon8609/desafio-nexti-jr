import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;

  max-width: 1440px;
  max-height: 820px;
  background: #F0F0F5;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #192a56;
  width: 300px;
  height: 100%;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  img {
    width: 150px;
    height: 150px;
  }
`;

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  background: #FFFFFF; 

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Roboto, sans-serif;

  .order-container + .order-container {
    margin-top: 10px;
  }

  .order-container {
    display: flex;
    background: #E5E5E5;
    border-radius: 5px;
    padding: 20px;
    width: 500px;
    
    .order {
      display: flex;
      flex-direction: column;
      color: #2f3640;
      width: 450px;
      padding-right: 10px;

      .products {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
      }

      .detail {
        display: flex;
        justify-content: space-between;
      }
  
      span {
        font-size: 18px;
      }
    }

    .icons {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;

      flex-direction: column;

      button {
        width: 28px;
        height: 28px;
        background: transparent;
        border: 0;
      }
    }
  }
  }

`;


export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;


