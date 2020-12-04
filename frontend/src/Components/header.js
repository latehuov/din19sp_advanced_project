import React, { Component } from 'react';
import styles from "./header.css"



export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    homeClicked = (props) => {
        props.history.push('/');
    }

    mapClicked = (props) => {
        props.history.push('/map');
    }
    loginClicked = (props) => {
        props.history.push('/login');
    }
    logoutClicked = (props) => {
        props.setUsername(null)
        props.history.push('/login');
    }
    helpClicked = (props) => {
        props.history.push('/help');
    }






    render() {
        let button = (
            <h2 onClick={() => this.loginClicked(this.props)}>Log in</h2>
        )
        if(this.props.username != null){
            button = <h2 onClick={() => this.logoutClicked(this.props)}>Log out</h2>
        }
        return (
            <div class="header">
                {button}
                <h2 onClick={() => this.homeClicked(this.props)}>Home</h2>
                <h1 class="theTitle">localhostess3000</h1>
                <h2 onClick={() => this.mapClicked(this.props)}>Map</h2>
                <h2 onClick={() => this.helpClicked(this.props)}>IwantEat</h2>
            </div>
        )
    }


}