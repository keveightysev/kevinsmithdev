import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <NavLink to="/about">about</NavLink>
      <NavLink to="/work">work</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </nav>
  );
};

export default Nav;

const NavLink = styled(Link)`
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  margin: 10px 0;
  box-sizing; border-box;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    width: 0%;
    border-bottom: 5px solid #fff;
    transition: all 300ms ease;
  }

  &:hover:before {
   width: 100%;
  }
`;
