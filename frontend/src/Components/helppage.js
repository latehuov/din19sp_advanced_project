import React, { Component } from 'react'
import styles from "./helppage.module.css"
import Header from './header.js'


export default class Helppage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantToShow: null
        }
    }
    randomClicked = () => {
        let randNum = Math.floor((Math.random() * this.props.data.length));
        this.setState({restaurantToShow : this.props.data[randNum]})
        
    }

    borgarsClicked = () => {
        let restaurantsOfChoice = []
        this.props.data.map(restaurant => {
            let type_res = restaurant.type_res.toLowerCase()
            if(type_res.includes('burger')){
                restaurantsOfChoice.push(restaurant)
            }
        })

        let randNum = Math.floor((Math.random() * restaurantsOfChoice.length));
        this.setState({restaurantToShow : restaurantsOfChoice[randNum]})
        
    }

    render() {
        let output
        if (this.state.restaurantToShow != null) {
            output = (
                <div>
                    <h1>Try this!</h1>
                    <p >{this.state.restaurantToShow.name_res}</p>
                    <p >{this.state.restaurantToShow.address}</p>
                    <p >{this.state.restaurantToShow.type_res}</p>
                    <p >score : {this.state.restaurantToShow.rating}</p>
                    <p >working hours : {this.state.restaurantToShow.time_open} - {this.state.restaurantToShow.time_close}</p>
                    <div>
                        <p id={this.state.restaurantToShow.id_restaurant} >{this.state.restaurantToShow.desc_rest}</p>

                        <img src={`${process.env.PUBLIC_URL}/images/${this.state.restaurantToShow.name_res}.jpg`}></img>
                    </div>
                </div>
            )
        }

        return (


            <div class="mainDisplay">
                <Header history={this.props.history}  username={this.props.username} setUsername={this.props.setUsername}/>
                <div className={styles.contentbox}>
                    <h1>Hungry? Desparate? Confused?</h1><br></br>
                    <h3>can't decide what to eat?</h3><br></br>
                    <h1>This page is for you!</h1><br></br>
                    <button onClick={() => this.randomClicked()}>I want something!</button>
                    <button onClick={() => this.borgarsClicked()}>I want borgars!</button>
                    {output}
                </div>
            </div>
        )
    }
}
