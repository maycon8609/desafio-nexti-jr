import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: string | '#273C75';
};

const Button: React.FC<ButtonProps> = ({ children, color, ...rest }) => (
  <Container color={color} type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
