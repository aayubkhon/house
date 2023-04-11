import React from "react";
import {  Outlet, useNavigate } from "react-router-dom";
import { Container, Logo, Section, Wrapper,Link } from "./style";
import logoImg from "../../assets/logo/logo.svg";
import { navbar } from "../../utils/nav";
export const Navbar = () => {

  const navigate = useNavigate()
  return (
    <Container>
      <Outlet />
      <Wrapper>
        <Section onClick={()=>navigate('/home')} logo>
          <Logo src={logoImg} alt="" />
          <h2>Houzing</h2>
        </Section>
        <Section>
          {navbar.map(({title, path},index) => {
            return (
              <Link className={({isActive})=> isActive && 'active'} key={index} to={path}>
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <button>sign in</button>
        </Section>
      </Wrapper>
      asdfasdfasfasdfas
    </Container>
  );
};

export default Navbar;
