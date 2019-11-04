import React, { FC, useState } from 'react';

import { Nav, NavLink, Hamburger } from './styles';

import { red, yellow, green, blue, violet } from '../../styles/constants';

const NavBar: FC = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Hamburger type="button" isOpen={open} onClick={() => setOpen(!open)}>
				<span>
					<span></span>
				</span>
			</Hamburger>
			<Nav isOpen={open}>
				<NavLink to="/home" onClick={() => setOpen(!open)} color={red}>
					Home
				</NavLink>
				<NavLink to="/about" onClick={() => setOpen(!open)} color={yellow}>
					About
				</NavLink>
				<NavLink to="/work" onClick={() => setOpen(!open)} color={green}>
					Work
				</NavLink>
				<NavLink to="/journal" onClick={() => setOpen(!open)} color={blue}>
					Journal
				</NavLink>
				<NavLink to="/contact" onClick={() => setOpen(!open)} color={violet}>
					Contact
				</NavLink>
			</Nav>
		</>
	);
};

export default NavBar;
