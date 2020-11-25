import React, { Component } from 'react';
import './App.css';
import DBdisplay from './Components/DBdisplay';
import axios from 'axios';

let fakeData = require('./example.json')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/restaurants')

      .then((response) => {
        
        console.log(response)
        if(response.restaurants) this.setState({ data: response.restaurants })
        
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
        <DBdisplay data={this.state.data}/>
      </div>
    )
  }
}

export default App;
