import React, { Component } from 'react'
import Header from './header.js'
import axios from 'axios';
import styles from './loginpage.module.css'

let userUser
let userPassword

function usernameChanged(event) {
    userUser = event.target.value
}
function passwordChanged(event) {
    userPassword = event.target.value
}


function LoginPressed(props, state) {


    if (state == 0) {
        axios.post('http://localhost:4000/login', {}, {
            auth: {
                username: userUser,
                password: userPassword
            }
        })
            .then(response => {
                props.SetIsLoggedIn()
                props.history.push('/content');

            })
            .catch(() => {
                console.log("failed")
                props.history.push('/');
            })
    }
    else if (state == 1){
        axios.post('http://localhost:4000/register', {}, {
            auth: {
                username: userUser,
                password: userPassword
            }
        })
            .then(response => {
                props.SetIsLoggedIn()
                props.history.push('/content');

            })
            .catch(() => {
                console.log("failed")
                props.history.push('/login');
            })
    }
}




export default class Loginpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageState: 0

        }
    }

    ChangeView = () => {
        if (this.state.pageState == 0) {
            this.setState({ pageState: 1 })
        }
        else if (this.state.pageState == 1) {
            this.setState({ pageState: 0 })
        }
    }




    render() {

        let output


        if (this.state.pageState == 0) {
            output = (
                <div class="mainDisplay">
                    <Header history={this.props.history} />
                    <div>
                        <div className={styles.loginbox}>
                            <h3 className={styles.header}>Log in</h3>

                            <p className={styles.header}>Username</p>
                            <div className={styles.textinputcontainer}>
                                <input type="text" placeholder="Enter Username" name="uname" required className={styles.textinput} onChange={usernameChanged}></input>
                            </div>


                            <p className={styles.header}>Password</p>
                            <div className={styles.textinputcontainer}>
                                <input type="text" placeholder="Enter Password" name="psw" required className={styles.textinput} onChange={passwordChanged}></input>
                            </div>

                            <br></br>
                            <div className={styles.logincontainer}>
                                <button type="submit" onClick={() => LoginPressed(this.props)}>Login</button>
                                <button type="submit" onClick={() => this.ChangeView()}>To Register</button>
                            </div>

                        </div>
                    </div>

                </div>
            )
        }
        else if (this.state.pageState == 1) {
            output = (
                <div class="mainDisplay">
                    <Header history={this.props.history} />
                    <div>
                        <div className={styles.loginbox}>
                            <h3 className={styles.header}>Register</h3>

                            <p className={styles.header}>Username</p>
                            <div className={styles.textinputcontainer}>
                                <input type="text" placeholder="Enter Username" name="uname" required className={styles.textinput} onChange={usernameChanged}></input>
                            </div>


                            <p className={styles.header}>Password</p>
                            <div className={styles.textinputcontainer}>
                                <input type="text" placeholder="Enter Password" name="psw" required className={styles.textinput} onChange={passwordChanged}></input>

                            </div>

                            <br></br>
                            <div className={styles.logincontainer}>
                                <button type="submit" onClick={() => LoginPressed(this.props, this.state.pageState)}>Register</button>
                                <button type="submit" onClick={() => this.ChangeView()}>To Login</button>
                            </div>

                        </div>
                    </div>

                </div>
            )
        }


        return (

            output

        )
    }
}
