import React, {Component} from 'react';
import Avengers from './Avengers';
import AddAvenger from './AddAvenger'
class App extends Component {
  state = {
    avengers : [
      {name:"Tony Stark", heroname:"Iron Man", power:"100"},
      {name:"Steve Rogers", heroname:"Captain America", power:"90"},
      {name:"Thor Odinson", heroname:"Thor", power:"80" }
    ]
  }
  render () {
    return (
      <div className="App">
        <h1>My First App</h1>
        <p>Happy Coding..!</p>
        <Avengers avengers={this.state.avengers} />
        <br></br>
        <AddAvenger />
      </div>
    );
  }
}

export default App;
