import styled from 'styled-components';

interface HamburgerProps {
	isOpen: boolean;
}

const Hamburger = styled.button<HamburgerProps>`
	// padding: 15px 15px;
	cursor: pointer;
	background-color: transparent;
	display: none;

	@media (max-width: 850px) {
		display: inherit;
	}

	&:focus {
		outline: none;
	}

	& > span {
		width: 40px;
		height: 24px;
		position: relative;

		& > span {
			display: block;
			top: 50%;
			margin-top: -2px;
			transform: ${({ isOpen }): string =>
				isOpen ? 'rotate(765deg)' : 'none'};
			transition-property: transform;
			transition-duration: 300ms;
			transition-timing-function: ease;

			&,
			&::before,
			&::after {
				width: 40px;
				height: 4px;
				background-color: #fff;
				position: absolute;
				transition-duration: 300ms;
			}

			&::before,
			&::after {
				content: '';
				display: block;
				transition-delay: 100ms;
				transition-timing-function: linear;
			}

			&::before {
				top: ${({ isOpen }): string => (isOpen ? '0' : '-10px')};
				opacity: ${({ isOpen }): string => (isOpen ? '0' : '1')};
				transition-property: top, opacity;
			}

			&::after {
				bottom: ${({ isOpen }): string => (isOpen ? '0' : '-10px')};
				transform: ${({ isOpen }): string =>
					isOpen ? 'rotate(90deg)' : 'none'};
				transition-property: bottom, transform;
			}
		}
	}
`;

export default Hamburger;
