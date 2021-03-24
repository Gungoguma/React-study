import React, {  } from 'react';

const Count = ({count, setCount, a, b}) => {
  return (
    <>
      <div>{count}</div>
      <button onClick={a}>업</button>
      <button onClick={b}>다운</button>
    </>
  );
}

export default Count