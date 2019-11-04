import styled from 'styled-components';

import { white } from '../../../styles/constants';

const Name = styled.div`
	color: ${white};
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	height: 60px;
	user-select: none;

	h1 {
		font-size: 3.5rem;
		line-height: 0.8;
		margin-bottom: 5px;
	}
	h2 {
		font-size: 1.6rem;
	}
`;

export default Name;
