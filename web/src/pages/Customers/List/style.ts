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

  background: #0097E6;
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

  .customer-container + .customer-container {
    margin-top: 10px;
  }

  .customer-container {
    display: flex;
    background: #E5E5E5;
    border-radius: 5px;
    padding: 20px;
    width: 500px;
    height: 150px;

    .profile {
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
    
    .customer {
      display: flex;
      flex-direction: column;
      color: #2f3640;

      h2 {
        font-size: 24px;
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


