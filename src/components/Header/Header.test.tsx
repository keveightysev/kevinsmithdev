import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
	createHistory,
	createMemorySource,
	LocationProvider,
} from '@reach/router';
import '@testing-library/jest-dom/extend-expect';

import Header from './index';

afterEach(cleanup);

describe('<Header />', () => {
	it('should render successfully', async () => {
		const { getByText } = await render(<Header />);
		expect(getByText('Kevin Smith')).toBeInTheDocument();
	});

	describe('Navigation', () => {
		it.todo('should navigate to about');
		it.todo('should navigate to work');
		it.todo('should navigate to journal');
		it.todo('should navigate to contact');
	});
});

function renderWithRouter(
	ui: React.ReactElement,
	{ route = '/', history = createHistory(createMemorySource(route)) } = {},
) {
	return {
		...render(<LocationProvider history={history}>{ui}</LocationProvider>),
		history,
	};
}

// test('full app rendering/navigating', async () => {
// 	const {
// 	  container,
// 	  history: { navigate },
// 	} = renderWithRouter(<App />)
// 	const appContainer = container
// 	// normally I'd use a data-testid, but just wanted to show this is also possible
// 	expect(appContainer.innerHTML).toMatch('You are home')

// 	// with reach-router we don't need to simulate a click event, we can just transition
// 	// to the page using the navigate function returned from the history object.
// 	await navigate('/about')
// 	expect(container.innerHTML).toMatch('You are on the about page')
//   })

//   test('landing on a bad page', () => {
// 	const { container } = renderWithRouter(<App />, {
// 	  route: '/something-that-does-not-match',
// 	})
// 	// normally I'd use a data-testid, but just wanted to show this is also possible
// 	expect(container.innerHTML).toMatch('No match')
//   })
