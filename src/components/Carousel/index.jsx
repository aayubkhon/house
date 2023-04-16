import React, { useRef } from "react";
import { Arrow, Blur, Container, Img } from "./style";
import { Carousel } from "antd";
import img1 from "../../assets/img/img4.png";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
export const GenCarousel = () => {
  const slider = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const OnMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.prev();
    if (name === "left") slider.current.next();
  };
  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
        <Img src={img3} />
      </Carousel>
      <Blur/>
      <Arrow onClick={OnMove} data-name="left" left />
      <Arrow onClick={OnMove} data-name="right" />
    </Container>
  );
};

export default GenCarousel;
