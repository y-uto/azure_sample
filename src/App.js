import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <br/> 
        <h1>This is H1 element</h1>
        <h2>This is H2 element</h2>
        <h3>This is H3 element</h3>
        
        <Search /> 
        
      </div>
    );
  }
}

export default App;
