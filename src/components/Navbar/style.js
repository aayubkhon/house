import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
`

const Wrapper = styled.div`
display:flex;
align-items:center;
max-width:1440px;
width:100%;
justify-content:space-between;
height:64px;
background:var(--colorPrimary);
color:#ffff;
padding:var(--padding);
font-size:16px;
`
const Section = styled.div`
display:flex;
align-items:center;
cursor:${({logo})=> logo && 'pointer'};
.active{
color: #5be952;
}
`

const Logo = styled.img`
margin:12px;
width:30px;
`

const Link = styled(NavLink)`
text-decoration:none;
color:#ffff;
padding:0 32px;
`
export{Container,Wrapper,Section,Logo,Link}