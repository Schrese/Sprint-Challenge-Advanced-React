import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import {OrangeToggle} from './components/OrangeToggle';


class App extends Component {
  constructor(){
    super();
    this.state = {
      players:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(res=> {
      console.log(res)
      //res.data
      this.setState({
        players: res.data
      })
    })
  }

  render() {
  return (
    <div className="App">
      <OrangeToggle />

      <h2>Players</h2>
      <div className = 'players-container'>
          {this.state.players.map(coolPeople => (
            <div className = 'player-card' key = {coolPeople.id}>
              <h4>{coolPeople.name}</h4>
              <p>{coolPeople.country}</p>
            </div>
          ))}
        </div>
    </div>
  );
}
}

export default App;
