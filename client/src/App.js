import React from 'react';
import { Helmet } from 'react-helmet';
import HelmetTest from './components/HelmetTest';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Helmet>
        <script src="/test.js"></script>
      </Helmet>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <HelmetTest />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
