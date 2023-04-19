import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #FFFFFF",
        color: "white",
      };
    case "light":
      return {
        background: "#ffffff",
        border: "1px solied ##E6E9EC",
        color: "#0d263b",
      };
    case "primary":
      return {
        background: "#0061df",
        border: "none",
        color: "#fffff",
      };
    default:
      return {
        background: "#0061df",
        border: "none",
        color: "#FFFFF",
      };
  }
};

const Container = styled.input`
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 2px;
  height: ${({ height }) => (height ? `${height}px` : '40px')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '40px')};
  min-width: 120px;
  font-size: 14px;
  border: 1px solid #e6e9ec;
  outline:none;
  padding-left: ${({ icon }) => (icon ? "35px" : "20px")};
  /* ${getType} */
`;


const Wrapper = styled.div`
display:flex;
align-items:center;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
position:relative;
`
const Icon = styled.div`
position:absolute;
left:10px;

`

export { Container,Wrapper,Icon };
