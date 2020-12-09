import React, { Component } from 'react'
import pic from "../pictures/Genshin-Impact-Noelle.png"
import gif from "../pictures/1507938144_tumblr_owx0emJxdR1tvl583o2_r1_1280.gif"
import DBdisplay from './DBdisplay.js';
import styles from "./mainpage.css"
import Header from "./header.js"

export default class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div class="mainDisplay">
                <Header
                    history={this.props.history}  username={this.props.username} setUsername={this.props.setUsername}/>
                <div id="NoelleBox">
                    <img id="Noelle" src={pic} alt="aaa"></img>
                </div>
                <br></br>
                <DBdisplay
                    username={this.props.username}
                    data={this.props.data}
                    setSearchResult={this.props.setSearchResult}
                    SearchResult={this.props.SearchResult} />
                <img id="theGif" src={gif} alt="aaa"></img>
            </div>
        )
    }
}
