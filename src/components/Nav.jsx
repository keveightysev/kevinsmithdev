import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const navigate = (location, path) => {
    const pathname = path === location.pathname ? "/" : path;
    return { ...location, pathname };
  };
  return (
    <NavStyle>
      <Tab to={loc => navigate(loc, "/about")}>About</Tab>
      <Tab to={loc => navigate(loc, "/work")}>My Work</Tab>
      <Tab to={loc => navigate(loc, "/contact")}>Contact</Tab>
    </NavStyle>
  );
};

export default Nav;

const NavStyle = styled.nav`
  position: absolute;
  top: 355px;
  left: -205px;
  transform: rotate(90deg);
  transform-origin: top top;
  display: flex;
  align-items: flex-end;
  height: 75px;
`;

const Tab = styled(NavLink)`
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 2.5rem;
  font-weight: 600;
  text-decoration: none;
  color: black;
  background: #e8e8e8;
  display: flex;
  align-items: start;
  justify-content: center;
  margin: 0 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 150px;
  height: 50px;
  transition: all 300ms ease;
  padding-top: 10px;
  cursor: pointer;

  &:hover {
    height: 75px;
  }

  &.active {
    height: 75px;
  }
`;
