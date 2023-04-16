import styled from "styled-components";
import { ReactComponent as search } from "../../assets/logo/loop.svg";
import { ReactComponent as filter } from "../../assets/logo/setting-lines.svg";
import { ReactComponent as houses } from "../../assets/logo/home2.svg";
const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;

const Icons = styled.div``;

Icons.Search = styled(search)`
  margin-right: 10px;

`;
Icons.Filter = styled(filter)`
  margin-right: 10px;
`;
Icons.Houses = styled(houses)`
    margin-right: 10px;
`;

const MenuWrapper = styled.div`
padding:30px;
background-color:white;
border:1px solid #E6E9EC;
`
const Section = styled.div`
display:flex;
margin-top:10px;
margin-bottom:20px;
gap:20px;
`

export { Container, Icons,MenuWrapper,Section };
