import React, { Component } from 'react';
import styles from "./header.css"



export default class Header extends Component{
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




    render(){
        return(
            <div class="header">
                    <h2 onClick={()=>this.homeClicked(this.props)}>Home</h2>
                    <h1 class="theTitle">localhostess3000</h1>
                    <h2 onClick={()=>this.mapClicked(this.props)}>Map</h2>
                </div>
        )
    }


}