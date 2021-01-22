import React, { Component, useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const updateEmail = e => {
    const {
      target : { value }
    } = e;
    setEmail(value);
  };
  useEffect(() => {
    document.title = count
  })
  return (
    <>
    {count}
    <br></br>
    <button onClick={() => setCount(count + 1)}>눌러봐</button>
    <button onClick={() => setCount(count - 1)}>누르지마</button>
    <input placeholder="Email" value={email} onChange={updateEmail} />
    </>
  )
}


export default App;