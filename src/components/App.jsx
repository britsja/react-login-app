import React from 'react';
import Login from './Login';

let isLoggedIn = false;

function renderConditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;  
  } else {
    return <Login />;
  }
}

function App() {
  return renderConditionally();
}

export default App;
