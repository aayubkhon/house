import styled, { css } from "styled-components";

const common = css``;
const Container = styled.div`
  width: 380px;
  height: 430px;
  border: 1px solid red;

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

const Img =styled.img`
width:100%;
max-height:220px;
`
export { Container,Img };
