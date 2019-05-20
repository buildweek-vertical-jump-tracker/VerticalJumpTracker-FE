import React, { Component } from 'react';

import WorkoutForm from './workoutForm';
import Workouts from './workouts';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          workouts: [],
        };
    }

    render(){
        return (
            <div>
                <h1>Home</h1>
                <WorkoutForm />
                <Workouts workouts={this.state.workouts} />
            </div>
        );
    };
} 

export default Home;