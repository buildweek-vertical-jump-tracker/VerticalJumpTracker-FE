import React, { Component } from 'react';
import Workouts from './workouts';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          workouts: props.workouts,
        };
    }

    render(){
        return (
            <div>
                <h1>Home</h1>
                <Workouts workouts={this.props.workouts} />
            </div>
        );
    };
} 

export default Home;