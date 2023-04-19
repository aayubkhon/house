import styled, { css } from "styled-components";
import {ReactComponent as bed} from '../../assets/logo/bed.svg'
import {ReactComponent as bath} from '../../assets/logo/bathh.svg'
import {ReactComponent as car} from '../../assets/logo/car.svg'
import {ReactComponent as ruler} from '../../assets/logo/ruler.svg'
import {ReactComponent as resize} from '../../assets/logo/strelka.svg'
import {ReactComponent as heart} from '../../assets/logo/love.svg'
const common = css``;

const Container = styled.div`
  width: 380px;
  height: 430px;

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
`;

const Content = styled.div`
  padding: 16px 20px;
  background-color:white; 
  display:flex;
  flex-direction:${({footer})=>(footer? 'row' :'column')};
  justify-content:${({footer})=>(footer && 'space-between')};
`;

const Datails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:14px;

`;

Datails.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction:${({row})=> (row ? 'row' : 'column')};
  align-items:${({footer})=> !footer && 'center'};

`;

const Icons = styled.div`
`;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Heart = styled(heart)`
width:37px;
height:37px;
padding:5px;
background: #F6F8F9;
border-radius: 50%;
margin-left:20px;
cursor: pointer;
:active{
  transform:scale(0.9);
}
`;


const Diverder = styled.div`
background:#E6E9EC;
height:1px;
width:100%;
`
export { Container, Img, Content, Datails, Icons,Diverder };
