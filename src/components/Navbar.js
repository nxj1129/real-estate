import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import EstateIcon from "../images/real-estate-icons8.png";
import { VscThreeBars } from "react-icons/vsc";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 1000;
  position: fixed;
  width: 100%;
  background: ${({ position }) =>
    position === "top" ? "rgba(0, 0, 0, 0)" : "rgba(120, 120, 120)"};
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const TextLogo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-weight: bold;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
`;

const MenuBars = styled(VscThreeBars)`
  display: none;
  background-size: contain;
  height: 40px;
  width: 40px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 35%);
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.i`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [position, setPosition] = useState("top");

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 500) {
        setPosition("moved");
      } else {
        setPosition("top");
      }
    });
  }, []);

  return (
    <Nav position={position}>
      <TextLogo to="/">
        <Logo src={EstateIcon} alt="custom" />
        ZYZZ
      </TextLogo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavButton>
        <Button to="/contact" primary="true">
          Contact us
        </Button>
      </NavButton>
    </Nav>
  );
};

export default Navbar;
