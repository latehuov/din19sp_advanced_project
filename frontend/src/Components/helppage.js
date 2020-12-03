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

    render() {
        let output
        if (this.state.restaurantToShow != null) {
            output = (
                <div>
                    <h1>Try this!</h1>
                    <h3>{this.state.restaurantToShow.name_res}</h3>
                </div>
            )
        }

        return (


            <div class="mainDisplay">
                <Header history={this.props.history} />
                <div className={styles.contentbox}>
                    <h1>Hungry? Desparate? Confused?</h1><br></br>
                    <h2>can't decide what to eat?</h2><br></br>
                    <h1>This page is for you!</h1><br></br>
                    <button onClick={() => this.randomClicked()}>I want something!</button>
                    {output}
                </div>
            </div>
        )
    }
}
