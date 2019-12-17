import React, {Component} from 'react';
import Avengers from './Avengers';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>My First App</h1>
        <p>Happy Coding..!</p>
        <Avengers />
      </div>
    );
  }
}

export default App;
