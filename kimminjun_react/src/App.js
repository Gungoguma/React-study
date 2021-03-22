import React, { Component } from 'react';

const App = () => {
	const name = '나다';
	return (
		<div>
			{
				name === '나다' && <div>또 너냐?</div>
			}
		</div>
	);
}

export default App;