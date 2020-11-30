import React, { Component } from 'react'
import styles from "./mappage.css"
import MapContainer from "./map.js"
import Header from './header.js'
export default class Mappage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (

            <div class="mainDisplay">
                <Header history={this.props.history}/>
                <div class="contentbox">
                    <div class="menu">
                        menu
                    </div>
                    <div class="map">
                        <MapContainer />
                    </div>

                </div>
            </div>
        )
    }
}
