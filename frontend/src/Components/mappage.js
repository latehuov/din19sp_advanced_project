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

        let output = (
            <div>
                <p>Select a restaurant to see the details!</p>
            </div>
        )
        if (this.props.selectedRestaurant != null) {
            output = (
                <div>
                    <p class="restInfo">{this.props.selectedRestaurant.name_res}</p>
                    <p class="restInfo">{this.props.selectedRestaurant.address}</p>
                    <p class="restInfo">{this.props.selectedRestaurant.type_res}</p>
                    <p class="restInfo">score : {this.props.selectedRestaurant.rating}</p>
                    <p class="restInfo">working hours : {this.props.selectedRestaurant.time_open} - {this.props.selectedRestaurant.time_close}</p>
                    <div>
                        <p id={this.props.selectedRestaurant.id_restaurant} >{this.props.selectedRestaurant.desc_rest}</p>

                        <img src={`${process.env.PUBLIC_URL}/images/${this.props.selectedRestaurant.name_res}.jpg`}></img>
                    </div>


                </div>
            )
        }

        return (


            <div class="mainDisplay">
                <Header history={this.props.history} />
                <div class="contentbox">
                    <div class="menu">
                        {output}
                    </div>
                    <div class="map">
                        <MapContainer
                            data={this.props.data}
                            selectedRestaurant={this.props.selectedRestaurant}
                            setSelectedRestaurant={this.props.setSelectedRestaurant} />
                    </div>

                </div>
            </div>
        )
    }
}
