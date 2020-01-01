import React, {Component} from 'react';
import Avengers from './Avengers';
import AddAvenger from './AddAvenger'
class App extends Component {
  state = {
    avengers : [
      {name:"Tony Stark", heroname:"Iron Man", power:"100", id:1},
      {name:"Steve Rogers", heroname:"Captain America", power:"90", id:2},
      {name:"Thor Odinson", heroname:"Thor", power:"80", id:3 }
    ]
  }
  addAvenger = (avenger) => {
    avenger.id = Math.random()
    let avengers = [...this.state.avengers , avenger]
    this.setState({
      avengers : avengers
    })
  }
  render () {
    return (
      <div className="App">
        <h1>My First App</h1>
        <p>Happy Coding..!</p>
        <Avengers avengers={this.state.avengers} />
        <br></br>
        <AddAvenger addAvenger={this.addAvenger}/>
      </div>
    );
  }
}

export default App;
