import React, { Component, useState, useEffect } from "react";
// import { useLocalStorage } from "./useLocalStorage";

function searchData() {
  return fetch(`http://localhost:5000/api/players`)
    .then(resp => resp.json())
    .then(resp => resp.items);
}

export default class SearchData extends Component {
  state = {
    search: ""
  };

  inputRef = React.createRef();

  search = e => {
    e.preventDefault();
    this.setState({ search: this.inputRef.current.value });
  };

  render() {
    const { search } = this.state;

    return (
      <form onSubmit={this.search}>
        <input type="text" placeholder="Search" ref={this.inputRef} />
        <button type="submit" onClick={this.search}>
          Search
        </button>
        <h1>{search}</h1>
        {/* {search && <GitHubSearchClass search={search} />}
        {search && < search={search} />} */}
      </form>
    );
  }
}

class GitHubSearchClass extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    searchData(this.props.search).then(resp => this.setState({ data: resp }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      searchData(this.props.search).then(resp => this.setState({ data: resp }));
    }
  }

  render() {
    const { data } = this.state;
    return (
      <ul>
        {data.map(data => (
          <li key={data.id}>
            <a href={data.html_url}>{data.name}</a>
          </li>
        ))}
      </ul>
    );
  }
}
