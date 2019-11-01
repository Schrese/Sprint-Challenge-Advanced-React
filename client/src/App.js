import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';


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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2>Players</h2>
        {this.state.players.map(coolPeople => (
          <div key = 'coolPeople'>
            <h4>{coolPeople.name}</h4>
            <p>{coolPeople.country}</p>
          </div>
        ))}
    </div>
  );
}
}

export default App;
