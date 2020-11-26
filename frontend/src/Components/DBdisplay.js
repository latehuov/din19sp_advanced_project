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
        if(event.target.value == "<empty string>" || event.target.value == "0"){
            this.props.setSearchResult(this.props.data)
        }
        else{
            let array = []
            this.props.data.map((item)=> {
                if(item.name_res.includes(event.target.value) || item.address.includes(event.target.value)  ){
                   array.push(item) 
                }
            })
            this.props.setSearchResult(array)
        }
    }



    render() {
        
        
        return (
            
            <div className={styles.dataBox}>
                <div id="searchbox">
                    <span>Search:</span><input type="text" onChange={this.search}></input>
                </div>
                
                    {
                        this.props.SearchResult.map(item =>
                            <DBline item={item}/>
                        )
                    }

            </div>
        )
    }
}
