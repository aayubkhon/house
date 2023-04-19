import styled,{css} from "styled-components";
import {ReactComponent as arrow} from '../../assets/logo/rightArrow.svg'


const common = css`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 42px;
line-height: 48px;
letter-spacing: -0.02em;
color: #FFFFFF;
margin-top:8px;

`
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

const Content = styled.div`
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:var(--colorWhite);
`
Content.Title= styled.h1`
${common}
`

Content.Desc = styled.p`
${common}
font-weight: 400;
font-size: 16px;
line-height: 24px;
`
Content.Price = styled.p`
${common}
font-weight: 600;
font-size: 28px;
line-height: 36px;
`
export{Container,Arrow,Img,Blur,Content}