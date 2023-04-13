import React from "react";
import { Container } from "./style";

export const Input = ({
  type,
  onChange,
  defaultValue,
  value,
  name,
  placeholder,
  width,
  height
}) => {
  return (
    <Container
      defaultValue={defaultValue}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Input
