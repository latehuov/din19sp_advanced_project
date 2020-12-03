import React, { Component } from 'react'

import Header from './header.js'
export default class Helppage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {


        return (


            <div class="mainDisplay">
                <Header history={this.props.history} />

            </div>
        )
    }
}
