import React from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "../assets/images/logo.svg";

const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <h1>kevinSmith.dev</h1>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  width: 100%;
  height: 100px;
  background: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  user-select: none;

  svg {
    height: 70%;
    width: auto;
  }

  h1 {
    font-size: 5rem;
    font-family: "Lucida Console", Monaco, monospace;
    letter-spacing: -0.3rem;
    font-weight: 800;
    margin-top: 5px;
  }

  @media (min-width: 550px) {
    margin-top: 50px;
    width: 500px;
    max-width: 600px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;

    @media (min-width: 700px) {
      width: 600px;
    }
  }
`;
