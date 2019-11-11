import React, { FunctionComponent } from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Journal from './Journal';
import Work from './Work';

const Main = () => {
	return (
		<Router>
			<Route path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route path="/journal" component={Journal} />
			<Route path="/work" component={Work} />
		</Router>
	);
};

type Props = { component: FunctionComponent } & RouteComponentProps;

const Route: FunctionComponent<Props> = ({ component: Component, ...rest }) => (
	<Component {...rest} />
);

export default Main;
