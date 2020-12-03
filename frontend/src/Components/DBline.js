import React, { Component } from 'react'

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

    Clicked = () =>{
        console.log(this.props.userId)
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

        return (

<<<<<<< HEAD
            <div class="a1" onClick={() => this.handleClick()}>
                <p class="restInfo">{this.props.item.name_res}</p>
                <p class="restInfo">{this.props.item.address}</p>
                <p class="restInfo">score : {this.props.item.rating}</p>
                <p class="restInfo">{checkIfOpen(this.props.item.time_open, this.props.item.time_close)}</p>

=======
            <div className="a1" onClick={() => this.handleClick()}>
                <p className="restInfo">{this.props.item.name_res}</p>
                <p className="restInfo">{this.props.item.address}</p>
                <p className="restInfo">{this.props.item.type_res}</p>
                <p className="restInfo">{checkIfOpen(this.props.item.time_open, this.props.item.time_close)}</p>
>>>>>>> luri
                {
                    this.state.displayInfo == true &&
                    <div>

                        <p class="restInfo">{this.props.item.type_res}</p>
                        <p id={this.props.item.id_restaurant} >{this.props.item.desc_rest}</p>
                        <button onClick={()=>this.Clicked()}>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <img src={`${process.env.PUBLIC_URL}/images/${this.props.item.name_res}.jpg`}></img>
                    </div>

                }
            </div>
        )
    }
}
