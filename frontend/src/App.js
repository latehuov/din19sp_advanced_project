import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import DBdisplay from './Components/DBdisplay';


let fakeData = require('./example.json')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData
    }
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
