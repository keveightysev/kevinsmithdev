import React, { FC } from 'react';
import { Router } from '@reach/router';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Journal from './Journal';
import Work from './Work';

const Main: FC = () => {
	return (
		<Router>
			<Home path="/" />
			<About path="/about" />
			<Contact path="/contact" />
			<Journal path="/journal" />
			<Work path="/work" />
		</Router>
	);
};

export default Main;
