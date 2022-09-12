import logo from './images6.jpg';
import React from 'react';

function Home() {
    return (
        <div>
        <header className="App-header">
        <img src={logo} className="" alt="logo" />
        <p>
          Welcome.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign In to App
        </a>
      </header>
     
    
        <h1>this is the homepage</h1></div>
        
    );
}

export default Home;