import React from "react";
import {
  Container,
  Content,
  Datails,
  Img,
  Icons,
  Footer,
  Diverder,
} from "./style";
import noimg from "../../assets/img/noimg.jpeg";
export const HouseCard = ({ url, title,info,bed,bath,garage,ruler }) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <h1 className="subTitle">{title || "New Apartment Nice Wiew"}</h1>
        <h1 className="info">{info || 'Quincy St, Brooklyn, NY, USA'}</h1>
        <Datails>
          <Datails.Item>
            <Icons.Bed />
            <p className="info">{bed || '4 Bed'}</p>
          </Datails.Item>
          <Datails.Item>
            <Icons.Bath />
            <p className="info">{bath || '2 Bath'}</p>
          </Datails.Item>
          <Datails.Item>
            <Icons.Car />
            <p className="info">{garage || '3 Garage'}</p>
          </Datails.Item>
          <Datails.Item>
            <Icons.Ruler />
            <p className="info">{ruler || '1 Ruler'}</p>
          </Datails.Item>
        </Datails>
      </Content>
      <Diverder />
      <Content footer>
        <Datails.Item footer>
          <p className="info">$2,800/mo</p>
          <p className="subTitle">$7,500/mo</p>
        </Datails.Item>
        <Datails.Item row>
          <Icons.Resize/>
          <Icons.Heart/>
        </Datails.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
