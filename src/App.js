import React, {Component} from 'react';
import Avengers from './Avengers';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>My First App</h1>
        <p>Happy Coding..!</p>
        <Avengers name="Tony Stark" heroname="Iron Man" rank="1" />
        <Avengers name="Steve Rogers" heroname="Captain America" rank="2" />
        <Avengers name="Thor Odinson" heroname="Thor" rank="3" />
      </div>
    );
  }
}

export default App;
