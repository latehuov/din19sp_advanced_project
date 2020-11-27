import React, { Component } from 'react'
import styles from "./mappage.css"
export default class Mappage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div class="mainDisplay">
                <div class="header">
                    <h1 class="theTitle">localhostess3000</h1>
                </div>
                <div class="contentbox">
                    <div class="menu">
                        menu
                    </div>
                    <div class="map">
                        map
                    </div>
                
                </div>
            </div>
        )
    }
}
