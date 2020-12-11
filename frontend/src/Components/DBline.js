import React, { Component } from 'react'
import axios from 'axios';
var today = new Date()
var hours = today.getHours()
var minutes = today.getMinutes()

function checkIfOpen(open, close) {
    let openHours = open.substring(0, 2)
    parseInt(openHours)
    let closeHours = close.substring(0, 2)
    parseInt(closeHours)
    if (openHours < hours && hours < closeHours) {
        return "open"
    }
    else if (openHours == hours) {
        let openMinutes = open.substring(3, 5)
        parseInt(openMinutes)
        if (openMinutes < minutes) {
            return "open"
        }
        else if (openMinutes > minutes) {
            return "closed"
        }
    }
    else if (closeHours == hours) {
        let closeMinutes = close.substring(3, 5)
        parseInt(closeMinutes)
        if (closeMinutes > minutes) {
            return "open"
        }
        else {
            return "closed"
        }
    }
    else if (hours < openHours || hours > closeHours) {
        return "closed"
    }
}


export default class DBline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInfo: false
        }
    }

    ratingButtonClicked = (rating) => {
        axios.post('https://shrouded-hamlet-41001.herokuapp.com/ratings', {
            id_restaurant: this.props.item.id_restaurant,
            cookie: this.props.username,
            rating: rating
        }
        )
            .then(response => {
                console.log(response)
                this.props.getNewData()
            })
            .catch((err) => {

                console.log(err)
            })

    }

    setDisplayInfo = (value) => {
        this.setState({ displayInfo: value })
    }

    handleClick = () => {
        if (this.state.displayInfo == false) {
            this.setDisplayInfo(true)
        }
        else if (this.state.displayInfo == true) {
            this.setDisplayInfo(false)
        }
    }

    render() {
        let ratingButtons
        if (this.props.username != null) {
            ratingButtons = (
                <div>
                    <p>Rate this restaurant!</p>
                    <button className="imgButton" onClick={() => this.ratingButtonClicked(1)}>1</button>
                    <button className="imgButton" onClick={() => this.ratingButtonClicked(2)}>2</button>
                    <button className="imgButton" onClick={() => this.ratingButtonClicked(3)}>3</button>
                    <button className="imgButton" onClick={() => this.ratingButtonClicked(4)}>4</button>
                    <button className="imgButton" onClick={() => this.ratingButtonClicked(5)}>5</button>
                </div>
            )
        }
        return (

            <div className="a1" onClick={() => this.handleClick()}>
                <p className="restInfo">{this.props.item.name_res}</p>
                <p className="restInfo">{this.props.item.address}</p>
                <p className="restInfo">{this.props.item.rating}</p>
                <p className="restInfo">{this.props.item.type_res}</p>
                <p className="restInfo">{checkIfOpen(this.props.item.time_open, this.props.item.time_close)}</p>
                {
                    this.state.displayInfo == true &&
                    <div className="restImage">


                        <p id={this.props.item.id_restaurant} >{this.props.item.desc_rest}</p>
                        <div className="ratingButtons">
                            {ratingButtons}
                            <img src={`${process.env.PUBLIC_URL}/images/${this.props.item.name_res}.jpg`}></img>
                        </div>
                    </div>

                }
            </div>
        )
    }
}
