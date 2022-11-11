import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState({
    firstName: '',
    lastName: ''
  })

  const getUser = async () => {
    const user = await axios.post('https://sm72yw5kid.execute-api.us-east-1.amazonaws.com/dev/name', {
      firstName: 'Go',
      lastName: 'Gol'
    })

   return user;
  }

  useEffect(() => {
    const asyncFunc = async () => {
      const user = await axios.post('https://sm72yw5kid.execute-api.us-east-1.amazonaws.com/dev/name', {
        firstName: 'Go',
        lastName: 'Gol'
      })
      setUsername({
        firstName: user.data.body.firstName,
        lastName: user.data.body.lastName
      })
    }
    asyncFunc();
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Welcome, {username.firstName} {username.lastName}.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
