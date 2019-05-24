import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './nav.css';

 class Navigation extends Component {
    constructor(){
        super()
        this.state = {
            logout: false
        }
    }
    removeItem = () => {
        localStorage.removeItem('token');     
        this.props.history.push('/Login')
        
    }
     render() {
        return (
            <div>
                <div className="AppNav">
                    <div className='title'>
                        <h1> Vertical Jump Tracker </h1>
                    </div>
                    <div className='home'>
                        <Link to="/home">Home</Link>
                    </div>
                    <div className='goals'>
                        <Link to="/goals">Goals</Link>
                    </div>
                    <a className='navButton' onClick={() => this.removeItem() }> Logout </a>
                </div>
            </div>
        );
    };
}
export default Navigation;