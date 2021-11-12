import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //class method
  bar = () => 'foo';
  render() {
    const name = "john";

    const foo = () => 'Bar';

    const loading = true;

    const showName = true;

    // if (loading) {
    //    return <h4> Loading...</h4>
    // }

    return (
      <div className='App'>
        <h1>Hello {name.toUpperCase()} </h1>
        <p>Expression: {1 + 2}</p>
        <p>Function hello: {foo()}</p>
        <p>Class Function hello: {this.bar()}</p>
        <p>double amperstand: </p>
        <h4> Hello {showName && name} </h4>
        <p>ternary operator:</p>
        {loading ? <h4> Loading...</h4> : <h4> data ...</h4>}

        </div>
      )
  }
}

export default App;
