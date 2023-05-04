import React, { useState } from "react";
import styled from "styled-components";
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo href="/">
        <img src="vaporwave.png" width="75px" height="auto" />
      </Logo>
      <Toggle onClick={handleToggle}>
        {isOpen ? <RxCross2 /> : <SlMenu />}
      </Toggle>
      <NavLinks isOpen={isOpen}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: white;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const Logo = styled.a`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Toggle = styled.div`
  display: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    position: fixed;
    top: 80px;
    left: ${(props) => (props.isOpen ? "-45px" : "-115%")};
    background-color: black;
    width: 50%;
    height: 100vw;
    transition: all 0.3s ease-in-out;
  }

  li {
    margin: 0 1rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #c90475;
    }
  }
`;

export default Navbar;
