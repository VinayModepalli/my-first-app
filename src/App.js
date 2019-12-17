import React, {Component} from 'react';
import Avengers from './Avengers';

class App extends Component {
  state = {
    avengers : [
      {name:"Tony Stark", heroname:"Iron Man", rank:"1"},
      {name:"Steve Rogers", heroname:"Captain America", rank:"2"},
      {name:"Thor Odinson", heroname:"Thor", rank:"3" }
    ]
  }
  render () {
    return (
      <div className="App">
        <h1>My First App</h1>
        <p>Happy Coding..!</p>
        <Avengers avengers={this.state.avengers} />
      </div>
    );
  }
}

export default App;
