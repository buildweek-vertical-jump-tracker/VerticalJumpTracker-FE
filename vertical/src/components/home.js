import React, { Component } from 'react';

import WorkoutForm from './workoutForm';
import Workouts from './workouts';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          workouts: props.workouts,
        };
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <h1>Home</h1>
                <WorkoutForm />
                <Workouts workouts={this.props.workouts} />
            </div>
        );
    };
} 

export default Home;