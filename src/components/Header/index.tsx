import React, { FC } from 'react';

import { HeaderStyle, Name, Nav, NavLink } from './styles';
import Logo from '../../styles/Logo';

import { red, yellow, green, blue, violet } from '../../styles/constants';

const Header: FC = () => {
	return (
		<HeaderStyle>
			<Name>
				<Logo />
				<h1>Kevin Smith</h1>
				<h2>Web developer extraordinaire</h2>
			</Name>
			<Nav>
				<NavLink to="/home" color={red}>
					Home
				</NavLink>
				<NavLink to="/about" color={yellow}>
					About
				</NavLink>
				<NavLink to="/work" color={green}>
					Work
				</NavLink>
				<NavLink to="/journal" color={blue}>
					Journal
				</NavLink>
				<NavLink to="/contact" color={violet}>
					Contact
				</NavLink>
			</Nav>
		</HeaderStyle>
	);
};

export default Header;
