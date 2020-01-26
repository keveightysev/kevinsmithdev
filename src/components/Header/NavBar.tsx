import React, { FC, useState } from 'react';

import { Nav, NavLink, Hamburger } from './styles';

import links from './links';

const NavBar: FC = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Hamburger
				type="button"
				isOpen={open}
				onClick={(): void => setOpen(!open)}
			>
				<span>
					<span></span>
				</span>
			</Hamburger>
			<Nav isOpen={open} onClick={(): void => setOpen(!open)}>
				{links.map(({ text, path, color }) => {
					return (
						<NavLink key={text} to={path} color={color}>
							{text}
						</NavLink>
					);
				})}
			</Nav>
		</>
	);
};

export default NavBar;
