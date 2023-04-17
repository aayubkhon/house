import React from "react";
import {Container, Img} from './style'
import noimg from '../../assets/img/noimg.jpeg'
export const HouseCard = ({url}) => {
  return (
    <Container>
      <Img src={url || noimg}/>
    </Container>
  );
};

export default HouseCard;
