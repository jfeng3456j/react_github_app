import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users';

class App extends Component {
  componentDidMount() {
    axios.get('https://api.github.com/users').then(res => console.log(res.data))
  }
  render() {
    
    return (
      <div className='App'>
        <NavBar />
        <div className="container">
          <Users/>
        </div>
       
        </div>
      )
  }
}

export default App;
