import React from 'react'
import styles from './DBdisplay.css'

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
        console.log(openMinutes, minutes)
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
    else if (openHours < hours && hours > closeHours){
        return "closed"
    }
}

export default function DBdisplay(props) {
    return (
        <div class={styles.dataBox}>
            <table>
                {
                    props.data.map(item => <tr class={styles.aRow}>
                        <td>{item.name_res}</td>
                        <td>{item.address}</td>
                        <td>{checkIfOpen(item.time_open, item.time_close)}</td>
                    </tr>)
                }
            </table>

        </div>
    )
}
