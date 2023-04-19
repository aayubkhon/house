import React from "react";
import { Container, Content, Datails, Img, Icons } from "./style";
import noimg from "../../assets/img/noimg.jpeg";
export const HouseCard = ({ url, title }) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <h1 className="subTitle">{title || "New Apartment Nice Wiew"}</h1>
        <h1 className="info">Quincy St, Brooklyn, NY, USA</h1>
        <Datails>
          <Datails.Item>
            <Icons.Bed />
            <p className="info">4 Beds</p>
          </Datails.Item>
          <Datails.Item>
            <Icons.Bath />
            <p className="info">4 Bath</p>
          </Datails.Item>
          <Datails.Item>
            <Icons.Car />
            <p className="info">4 Car</p>
          </Datails.Item>
          <Datails.Item>
            <Icons.Ruler />
            <p className="info">3 Ruler</p>
          </Datails.Item>
        </Datails>
      </Content>
    </Container>
  );
};

export default HouseCard;
