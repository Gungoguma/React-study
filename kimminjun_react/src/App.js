import React, { Component } from 'react';

const App = () => {
	return (
		<div>
			{
				1 + 1 === 2 ? <div>정답입니다~</div> : <div>틀렸습니다~</div>
			}
		</div>
	);
}

export default App;