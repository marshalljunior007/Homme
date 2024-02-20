import React from 'react';
import { ButtonField } from './buttonStyle';

const Button = ({ children, variant }) => {
  return <ButtonField variant={variant}>{children}</ButtonField>;
};

export default Button;
