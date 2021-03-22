import React, { Component } from 'react';

const App = () => {
	const number = 1;
	return (
		<div>
			{
				(function() {
					if (number === 1) return <div> 1이다 </div>
					if (number === 2) return <div> 2이다 </div>
					if (number === 3) return <div> 3이다 </div>
					return <div>1,2,3 다 아니다..</div>
				})()
			}
		</div>
	);
}

export default App;