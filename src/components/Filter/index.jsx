import React, { useRef } from "react";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { Input, Button } from "../Generic";
import { Dropdown } from "antd";

export const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  
  const item = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input ref={countryRef} placeholder={"Country"} />
        <Input ref={regionRef} placeholder={"Region"} />
        <Input ref={cityRef} placeholder={"City"} />
        <Input ref={zipRef} placeholder={"Zip Code"} />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomsRef} placeholder={"Rooms"} />
        <Input ref={sizeRef} placeholder={"Size"} />
        <Input ref={sortRef} placeholder={"Sort"} />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder={"Min Price"} />
        <Input ref={maxPriceRef} placeholder={"Max Price"} />
      </Section>
    </MenuWrapper>
  );
  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown overlay={item} placement="bottomRight" arrow>
        <div>
          <Button type={"light"}>
            <Icons.Filter />
            Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Search />
        Search
      </Button>
    </Container>
  );
};
export default Filter;
