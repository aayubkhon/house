import React from "react";
import { Container, Icons } from "./style";
import { Input, Button } from "../Generic";

export const Filter = () => {
  return (
    <Container>
      <Input
        width={900}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Button width={150} type={'light'}>
        <Icons.Filter/>
        Advanced
      </Button>
      <Button width={150} >
        <Icons.Search/>
        Search</Button>
    </Container>
  );
}; 
export default Filter;
