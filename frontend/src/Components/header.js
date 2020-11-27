import React, { Component } from 'react';
import styles from "./header.css"
import history from '../history';
function  homeClicked() {
    history.push('/');
}

function  mapClicked() {
    history.push('/map');
}

export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }





    render(){
        return(
            <div class="header">
                    <h2 onClick={()=>homeClicked()}>Home</h2>
                    <h1 class="theTitle">localhostess3000</h1>
                    <h2 onClick={()=>mapClicked()}>Map</h2>
                </div>
        )
    }


}