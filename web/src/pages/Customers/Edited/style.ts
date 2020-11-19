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

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  background: #FFFFFF; 

  .inputs {
  
    .field-group {
      flex: 1;
      display: flex;
    }

    .field {
      flex: 1;

      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
    }

    .field input[type=text],
    .field input[type=date],
    .field input[type=number] {
      flex: 1;
      background: #D8D7D7;
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      color: #000;
    }


    .field label {
      font-size: 20px;
      font-family: Roboto, sans-serif;
      margin-bottom: 8px;
      color: #000;
    }


    .field-group .field + .field {
      margin-left: 24px;
    }
  }

  .options {
    display: flex;
    justify-content: space-between;

    button {
      padding: 0;
      margin: 0;
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


