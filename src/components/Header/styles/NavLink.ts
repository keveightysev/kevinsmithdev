import styled from 'styled-components';
import { Link } from '@reach/router';

import { white } from '../../../styles/constants';

const NavLink = styled(Link)`
	color: ${white};
	text-decoration: none;
	font-size: 1.6rem;
	position: relative;
	letter-spacing: 1px;
	user-select: none;

	&:before {
		content: '';
		position: absolute;
		overflow: hidden;
		bottom: -5px;
		width: 0%;
		height: 3px;
		background: ${({ color }) => color};
		transition: width 300ms ease;
	}

	&:hover:before {
		width: 100%;
	}
`;

export default NavLink;
