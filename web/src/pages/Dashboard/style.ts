import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  max-width: 1440px;
  max-height: 820px;
  background: #192a56;
`;


export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  height: 150px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: Roboto, sans-serif;
    font-size: 24px;
    color: #C23616;
    margin-left: 100px;
  }
`;

export const Buttons = styled.div`
  display: flex;

  align-items: center;
  align-content: flex-end;
`;

export const Body = styled.body`
  display: flex;
  background: transparent;
`;

export const Text = styled.div`
  margin: 0 50px 0 100px;
  color: #F5F6FA;
  font-weight: bold;

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 24px;
  }
`;

export const Image = styled.div`
  margin-right: 20px;

  img {
    width: 700px;
    height: 424px;
  }
`;

