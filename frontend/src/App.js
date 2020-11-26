import React, { Component } from 'react';
import './App.css';
import DBdisplay from './Components/DBdisplay';
import axios from 'axios';
import pic from "./Genshin-Impact-Noelle.png"
import gif from "./1507938144_tumblr_owx0emJxdR1tvl583o2_r1_1280.gif"

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
      <div class="mainDisplay">
        <h1 class="theTitle">localhostess3000</h1>
        <div id="NoelleBox">
          <img id="Noelle" src={pic} alt="aaa"></img>
        </div>
        <br></br>
        <DBdisplay data={this.state.data} setSearchResult={this.setSearchResult} SearchResult={this.state.SearchResult}/>
        <img id="theGif" src={gif} alt="aaa"></img>
      </div>
    )
  }
}

export default App;
