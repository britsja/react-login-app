import React from 'react';
import Login from './Login';

let isLoggedIn = false;

let userIsRegistered = true;

function evalUser() {
  if(isLoggedIn) {
    return <h1>Hello World</h1>;
  } else {
    if(userIsRegistered) {
      return  <Login showRegistration={!userIsRegistered} />;
    } else {
      return  <Login showRegistration={!userIsRegistered} />;
    }
  }  
}

function App() {
  return evalUser();
}

export default App;
