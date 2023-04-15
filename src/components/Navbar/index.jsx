import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container,Main, Logo, Section, Wrapper, Link } from "./style";
import logoImg from "../../assets/logo/logo.svg";
import { navbar } from "../../utils/nav";
import Button from "../Generic/Button";
import Filter from "../Filter";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
     <Main>
     <Wrapper>
        <Section onClick={() => navigate("/home")} logo>
          <Logo src={logoImg} alt="" />
          <h2>Houzing</h2>
        </Section>
        <Section>
          {navbar.map(({ title, path,hidden }, index,) => {
            return (
              !hidden && (
                <Link
                  className={({ isActive }) => isActive && "active"}
                  key={index}
                  to={path}
                >
                  {title}
                </Link>
              )
            );
          })}
        </Section>
        <Section>
          <Button onClick={() => navigate("/signin")} type={"dark"}>
            Sign in
          </Button>
        </Section>
      </Wrapper>
     </Main>
      <Filter/>
      <Outlet />
    </Container>
  );
};

export default Navbar;
