import styled, { css } from "styled-components";
import {ReactComponent as bed} from '../../assets/logo/bed.svg'
import {ReactComponent as bath} from '../../assets/logo/bathh.svg'
import {ReactComponent as car} from '../../assets/logo/car.svg'
import {ReactComponent as ruler} from '../../assets/logo/ruler.svg'
const common = css``;

const Container = styled.div`
  width: 380px;
  height: 430px;
  border: 1px solid red;

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
`;

const Content = styled.div`
  padding: 0 20px;
  padding-top:24px;
`;

const Datails = styled.div`
  display: flex;
  justify-content: space-between;
`;

Datails.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  margin-top:20px;
`;

const Icons = styled.div`
`;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
export { Container, Img, Content, Datails, Icons };
