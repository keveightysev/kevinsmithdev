import React from 'react';

import Global from './styles/Global';

import Header from './components/Header';
import Main from './components/Main';

const App: React.FC = () => {
	return (
		<>
			<Global />
			<Header />
			<Main />
		</>
	);
};

export default App;
