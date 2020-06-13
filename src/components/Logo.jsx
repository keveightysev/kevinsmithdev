import styled from "styled-components";

import { ReactComponent as LogoSVG } from "../assets/images/logo.svg";

const Logo = styled(LogoSVG)`
  border: ${({ home }) => (home ? "10px" : "5px")} solid #fff;
  width: ${({ home }) => (home ? "15rem" : "7.5rem")};
  height: ${({ home }) => (home ? "15rem" : "7.5rem")};
  padding: ${({ home }) => (home ? "20px" : "10px")};
  fill: #fff;
`;

export default Logo;
