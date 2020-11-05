import React from 'react'
import styles from './DBdisplay.css'
export default function DBdisplay(props) {
    return (
        <div class={styles.dataBox}>
            <table>
                {
                    props.data.map(item => <tr class={styles.aRow}>
                        <td>{item.name_res}</td>
                        <td>{item.address}</td>
                        <td>{item.time_open}</td>
                        <td>{item.time_close}</td>
                    </tr>)
                }
            </table>

        </div>
    )
}
