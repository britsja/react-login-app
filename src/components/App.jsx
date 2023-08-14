import React from 'react';
import Login from './Login';

let isLoggedIn = false;

let userIsRegistered = true;

function evalUser() {
  if(isLoggedIn) {
    return <h1>Hello World</h1>;
  } else {
    if(userIsRegistered) {
      return  <Login showRegistration="false" />;
    } else {
      return  <Login showRegistration="true" />;
    }
  }  
}

function App() {
  return evalUser();
}

export default App;
