import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';

 class Navigation extends Component {
    constructor(){
        super()
        this.state = {
            logout: false
        }
    }
    removeItem = () => {
        localStorage.removeItem('token');
        return <Redirect to="/login" />
    }
     render() {
        return (
            <div>
                <div className="App">
                    <h1> Vertical Jump Tracker </h1>
                    <div>
                        <Link to="/home">Home</Link>
                    </div>
                    <div>
                        <Link to="/goals">Goals</Link>
                    </div>
                    <button onClick={() => this.removeItem() }> Logout</button>
                </div>
            </div>
        );
    };
}
export default Navigation;