import PersonList from './PersonList'
import React, { Component } from 'react'

class App extends Component {
  state = { people: []}
  render(){
    return (
      <div className="App">
        <PersonList />
      </div>
    );
  }
}

export default App;
