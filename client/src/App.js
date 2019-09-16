import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    fetch(`http://localhost:5000/api/players`)
    .then(res => res.json())
      .then(country => this.setState({ data:country }))
      .catch(err => console.log("noooo"));
  }

  render() {
  console.log(this.state)
  return (
    <div className= "App">
      <h1>Women's World Cup</h1>
      {this.state.data.map(women => (
        <div>
          <p>Name: {women.name}</p>
          <p>Country: {women.country}</p>
        </div>
      ))}
    </div>
  );
}
}

export default App;
