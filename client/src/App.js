import React, { Component } from "react";
// import useSearch from "../src/hooks/useSearch";
import NavBar from "./components/NavBar";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/players`)
      .then(res => res.json())
      .then(country => this.setState({ data: country }))
      .catch(err => console.log("noooo"));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar />

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
