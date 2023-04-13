import React from "react";
import { Container } from "./style";

const Button = ({
  children,
  onClick,
  type,
  width,
  height
}) => {
  return (
    <Container height={height} width={width} onClick={onClick} type={type} >
      {children || 'Generic Button'}
    </Container>
  );
};

export default Button;
