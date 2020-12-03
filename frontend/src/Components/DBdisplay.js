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
                if(item.name_res.toLowerCase().includes(event.target.value.toLowerCase()) || item.address.toLowerCase().includes(event.target.value.toLowerCase())  ){
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
