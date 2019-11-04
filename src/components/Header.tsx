import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { ReactComponent as LogoSvg } from '../assets/img/klogo.svg';

import { white } from '../styles/constants';

const Header: FC = () => {
	return (
		<HeaderStyle>
			<Name>
				<h1>Kevin Smith</h1>
				<h2>Web developer extraordinaire</h2>
			</Name>
			<Logo />
			<Nav>
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/work">Work</NavLink>
				<NavLink to="/journal">Journal</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</Nav>
		</HeaderStyle>
	);
};

export default Header;

const HeaderStyle = styled.header`
	width: 90%;
	margin: 20px auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Nav = styled.nav`
	width: 30%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavLink = styled(Link)`
	color: ${white};
	text-decoration: none;
	font-size: 1.6rem;
`;

const Name = styled.div`
	width: 30%;
	color: ${white};
	h1 {
		font-size: 3.5rem;
	}
	h2 {
		font-size: 1.6rem;
	}
`;

const Logo = styled(LogoSvg)`
	width: 50px;
	fill: ${white};
	stroke: ${white};
`;
