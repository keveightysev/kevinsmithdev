import styled from 'styled-components';

import { white } from '../../../styles/constants';

const Name = styled.div`
	color: ${white};
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	height: 50px;
	user-select: none;

	@media (max-width: 400px) {
		justify-content: normal;
	}

	h1 {
		font-size: 3.4rem;
		line-height: 0.8;
		margin-bottom: 5px;

		@media (max-width: 400px) {
			width: 50%;
			font-size: 3rem;
			margin-left: -20px;
		}
	}
	h2 {
		font-size: 1.6rem;

		@media (max-width: 400px) {
			display: none;
		}
	}
`;

export default Name;
