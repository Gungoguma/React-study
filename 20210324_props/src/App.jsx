import React, { useState } from 'react';
import Count from './Count';
const App = () => {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1)
  };
  const onClickMinus = () => {
    setCount(count - 1)
  };
  
  return (
    <div>
      <Count count={count} setCount={setCount}
      a={onClickPlus} b={onClickMinus}/>
    </div>
  );
}

export default App;