import styled from 'styled-components';

import { ReactComponent as LogoSvg } from '../assets/img/klogo.svg';

import { white } from './constants';

const Logo = styled(LogoSvg)`
	width: 50px;
	fill: ${white};
	stroke: ${white};
	margin-right: 10px;
`;

export default Logo;
