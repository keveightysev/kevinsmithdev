import React, { FC } from 'react';

import NavBar from './NavBar';

import { HeaderStyle, Name } from './styles';
import Logo from '../../styles/Logo';

const Header: FC = () => {
	return (
		<HeaderStyle>
			<Name>
				<Logo />
				<h1>Kevin Smith</h1>
				<h2>Web developer extraordinaire</h2>
			</Name>
			<NavBar />
		</HeaderStyle>
	);
};

export default Header;
