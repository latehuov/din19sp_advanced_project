import React, { Component } from 'react';
import './App.css';
import DBdisplay from './Components/DBdisplay';
import axios from 'axios';

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

        console.log(response)
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
          <img id="Noelle" src="https://owwya.com/wp-content/uploads/2020/10/Genshin-Impact-Noelle.png"></img>
        </div>
        <br></br>
        <DBdisplay data={this.state.data} setSearchResult={this.setSearchResult} SearchResult={this.state.SearchResult}/>
      </div>
    )
  }
}

export default App;
