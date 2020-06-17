import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import Logo from "./Logo";
const Nav = () => {
  const {
    location: { pathname },
  } = useHistory();
  return (
    <Header home={pathname === "/" ? 1 : 0}>
      <Link to="/">
        <Logo home={pathname === "/" ? 1 : 0} title="Kevin Smith" />
      </Link>
      <nav>
        <Link to="/about">about</Link>
        <Link to="/work">work</Link>
        <Link to="/contact">contact</Link>
      </nav>
    </Header>
  );
};

export default Nav;

const Header = styled.header`
  display: flex;
  flex-direction: ${({ home }) => (home ? "column" : "row")};
  align-items: center;
  width:${({ home }) => (home ? "auto" : "55%")};
  ${({ home }) =>
    !home &&
    `
    position: absolute; 
    top: 20px; 
    left: 0;
  `}

  @media (max-width: 500px) {
    width: ${({ home }) => (home ? "auto" : "95%")};;
  }

  nav {
    display: flex;
    flex-direction: ${({ home }) => (home ? "column" : "row")};
    align-items: center;
    margin-top: ${({ home }) => (home ? "20px" : "5px")};
    margin-left: ${({ home }) => (home ? "0" : "90px")};
    width: ${({ home }) => (home ? "auto" : "80%")};
    justify-content: space-between;
    @media (max-width: 500px) {
      width: ${({ home }) => (home ? "auto" : "80vw")};;
    }
  
    a {
      font-family: "Lucida Console", Monaco, monospace;
      font-size: ${({ home }) => (home ? "4rem" : "2.5rem")};;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      margin: 10px 0;
      box-sizing; border-box;
      position: relative;

      @media (max-width: 500px) {
        font-size: ${({ home }) => (home ? "4rem" : "2rem")};;
      }
    
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
    }
  }
`;
