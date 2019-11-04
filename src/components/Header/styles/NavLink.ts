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

	@media (max-width: 850px) {
		width: 100%;
		padding: 5px 20px;
		text-align: right;
		&:not(:last-of-type) {
			border-bottom: 1px solid ${white};
		}

		&:hover {
			background: ${({ color }) => color};
		}

		&:before {
			content: none;
		}
	}
`;

export default NavLink;
