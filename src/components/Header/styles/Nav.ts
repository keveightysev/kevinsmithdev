import styled from 'styled-components';

import { white } from '../../../styles/constants';

interface HamburgerProps {
	isOpen: boolean;
}

const Nav = styled.nav<HamburgerProps>`
	width: 40%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 850px) {
		display: flex;
		position: absolute;
		right: 5%;
		bottom: -145px;
		z-index: 1;
		flex-direction: column;
		border: 1px solid ${white};
		width: auto;
		opacity: ${({ isOpen }): string => (isOpen ? '1' : '0')};
		visibility: ${({ isOpen }): string => (isOpen ? 'visibile' : 'hidden')};
		overflow: hidden;
		transition: all 0.3s ease-out;
	}
`;

export default Nav;
