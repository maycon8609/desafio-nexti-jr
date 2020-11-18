import styled, { css } from 'styled-components';

interface ButtonProps {
  color: string | '#273C75';
}

export const Container = styled.button<ButtonProps>`
  background: #C23616;
  color: #F5F6FA;
  font-weight: 500;

  width: 150px;
  height: 75px;
  border: 0;
  margin: 0 20px;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.8;
  }

  ${props =>

    props.color !== 'transparent' ? 
    css`
      background: ${props.color};
    `
    : 
    css`
      background: transparent;
    `
  }
`;