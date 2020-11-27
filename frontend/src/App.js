import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Mainpage from "./Components/mainpage.js"

let fakeData = require('./example.json')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData,
      SearchResult: fakeData
    }
  }

  setSearchResult = (value) => {
    this.setState({SearchResult: value})
  }

  componentDidMount() {
    axios.get('http://localhost:4000/restaurants')

      .then((response) => {
        if (response.data) {
          this.setState({ data: response.data })
          this.setState({ SearchResult : response.data})
        }
      });
  }

  render() {
    return (
      <Mainpage data={this.state.data} SearchResult={this.state.SearchResult} setSearchResult={this.setSearchResult}  />
    )
  }
}

export default App;
