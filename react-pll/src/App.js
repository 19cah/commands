import React from 'react';
import Pll from 'react-pll';

function App() {
  return (
    <div className="app">
      <header className="header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Pll language="c"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="link"
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
