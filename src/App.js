import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar'
import Users from './components/users';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar/>
        <Users/>
        </div>
      )
  }
}

export default App;
