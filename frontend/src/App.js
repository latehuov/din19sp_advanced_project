import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Mainpage from "./Components/mainpage.js"
import Mappage from "./Components/mappage.js"
import Loginpage from "./Components/loginpage.js"
import Helppage from "./Components/helppage.js"




let fakeData = require('./example.json')

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      data: fakeData,
      SearchResult: fakeData,
      selectedRestaurant: null,
      username: null
    }
  }

  setSearchResult = (value) => {
    this.setState({ SearchResult: value })
  }
  setSelectedRestaurant = (value) => {
    this.setState({ selectedRestaurant: value })
  }
  setUsername = (value) => {
    this.setState({ username: value })
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
      <Router  >
        <Route path="/" exact render={(routeProps) =>
          <Mainpage
            userId={this.state.userId}
            data={this.state.data}
            SearchResult={this.state.SearchResult}
            setSearchResult={this.setSearchResult}
            {...routeProps} />}
        />

        <Route path="/map" exact render={(routeProps) =>
          <Mappage
            data={this.state.data}
            selectedRestaurant={this.state.selectedRestaurant}
            setSelectedRestaurant={this.setSelectedRestaurant}
            {...routeProps} />}

        />
        <Route path="/login" exact render={(routeProps) =>
          <Loginpage
            setUsername={this.setUsername}
            data={this.state.data}
            {...routeProps} />}

        />
        <Route path="/help" exact render={(routeProps) =>
          <Helppage
            data={this.state.data}
            {...routeProps} />}

        />
      </Router>
    )
  }
}

export default App;
