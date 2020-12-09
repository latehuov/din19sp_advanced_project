import React, { Component } from 'react'
import styles from './DBdisplay.css'
import DBline from "./DBline.js"





export default class DBdisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    search = (event) => {
        this.props.setSearchResult(event.target.value)
        if (event.target.value == "<empty string>" || event.target.value == "0" || event.target.value == null || event.target.value == undefined) {
            this.props.setSearchResult(this.props.data)
        }

        else {
            let array = []
            this.props.data.map((item) => {
                if (item.name_res.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.address.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.type_res.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.rating.toLowerCase().includes(event.target.value.toLowerCase())) {
                    array.push(item)
                }
            })
            this.props.setSearchResult(array)
        }
    }

    buttonFilter(value) {
        this.props.setSearchResult(value)
        if (value == "<empty string>" || value == "0" || value == null || value == undefined) {
            this.props.setSearchResult(this.props.data)
        }

        else {
            let array = []
            this.props.data.map((item) => {
                if (item.name_res.toLowerCase().includes(value) ||
                    item.address.toLowerCase().includes(value) ||
                    item.type_res.toLowerCase().includes(value) ||
                    item.rating.toLowerCase().includes(value)) {
                    array.push(item)
                }
            })
            this.props.setSearchResult(array)
        }
    }




    render() {





        return (

            <div className={styles.dataBox}>
                <div className="searchbox">
                    <span>Search:</span><input className="searchinput" type="text" onChange={this.search}></input>
                    <button onClick={() => this.buttonFilter("5.")} >Give me da best!</button>
                    <button onClick={() => this.buttonFilter("burger")} >Give me borgars!</button>
                    <button onClick={() => this.buttonFilter()} >Give me everything!</button>
                </div>

                {
                    this.props.SearchResult.map(item =>
                        <DBline
                            getNewData={this.props.getNewData}
                            username={this.props.username}
                            item={item}
                        />
                    )
                }

            </div>
        )
    }
}
