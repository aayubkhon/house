import styled from "styled-components";
import { ReactComponent as search } from "../../assets/logo/loop.svg";
import { ReactComponent as filter } from "../../assets/logo/setting-lines.svg";
import { ReactComponent as houses } from "../../assets/logo/house.svg";
const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;

const Icons = styled.div``;

Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

export { Container, Icons };
