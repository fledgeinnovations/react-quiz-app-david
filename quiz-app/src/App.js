import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Movie Quiz</h1>
        </header>
        <Question content="Who is the Director of the Movie: Queen of Katwe?"/>
      </div>
    );
  }
}

export default App;
