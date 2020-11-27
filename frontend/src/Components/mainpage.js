import React, { Component } from 'react'
import pic from "../Genshin-Impact-Noelle.png"
import gif from "../1507938144_tumblr_owx0emJxdR1tvl583o2_r1_1280.gif"
import DBdisplay from './DBdisplay.js';
export default class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
      }

    render() {
        console.log(this.props)
        return (
            <div class="mainDisplay">
            <h1 class="theTitle">localhostess3000</h1>
            <div id="NoelleBox">
              <img id="Noelle" src={pic} alt="aaa"></img>
            </div>
            <br></br>
            <DBdisplay data={this.props.data} setSearchResult={this.props.setSearchResult} SearchResult={this.props.SearchResult}/>
            <img id="theGif" src={gif} alt="aaa"></img>
          </div>
        )
    }
}
