import styled from "styled-components";

import { ReactComponent as LogoSVG } from "../assets/images/logo.svg";

const Logo = styled(LogoSVG)`
  ${({ home }) =>
    home
      ? `position: relative;
        top-50%;
      border: 10px solid #fff;
      width: 15rem;
      height: 15rem;
      padding: 20px;`
      : `
      position: absolute;
      top: -25%;
      border: 5px solid #fff;
      width: 7.5rem;
      height: 7.5rem;
      padding: 10px;`}
  fill: #fff;
`;

export default Logo;
