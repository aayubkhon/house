import styled from "styled-components";
import {ReactComponent as arrow} from '../../assets/logo/rightArrow.svg'
const Container = styled.div`
position:relative;
height:571px;
`

const Arrow = styled(arrow)`
position:absolute;
top:50%;
width:50px;
height:50px;
padding:18px;
border-radius:50%;
background-color:rgba(255,255,255,0.2);
transform:${({left})=>(!left?'rotate(0deg)' :'rotate(180deg)')};
left:${({left})=> !left && '20px'};
right:${({left})=> left && '20px'};
cursor: pointer;
:hover{
    background-color:rgba(255,255,255,0.4);

}
`
const Img = styled.img`
width:100%;
height:571px;
`

const Blur = styled.div`
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
background-color:rgba(0,0,0,0.4);
`
export{Container,Arrow,Img,Blur}