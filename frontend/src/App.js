import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Mainpage from "./Components/mainpage.js"
import Mappage from "./Components/mappage.js"
import { BrowserRouter as Router, Route } from "react-router-dom";

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
    this.setState({ SearchResult: value })
  }

  componentDidMount() {
    axios.get('http://localhost:4000/restaurants')

      .then((response) => {
        if (response.data) {
          this.setState({ data: response.data })
          this.setState({ SearchResult: response.data })
        }
      });
  }

  render() {
    return (
      <Router>
        <Route path="/" exact render={(routeProps) =>
          <Mainpage data={this.state.data} SearchResult={this.state.SearchResult} setSearchResult={this.setSearchResult}  {...routeProps} />}
        />

        <Route path="/map" exact render={(routeProps) =>
          <Mappage data={this.state.data} SearchResult={this.state.SearchResult} setSearchResult={this.setSearchResult}  {...routeProps} />}
        
        />
      </Router>
    )
  }
}

export default App;
