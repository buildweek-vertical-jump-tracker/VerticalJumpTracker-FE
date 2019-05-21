import React, { Component } from 'react';

import Workout from './workout';

class Workouts extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Workouts">
        <h1>Workouts Done</h1>
        <ul>
        {this.props.workouts.exercises && this.props.workouts.exercises.map(workouts => {
            return (
              <Workout 
                key={workouts.exerciseid}
                exercise={workouts.exerciseName}
                reps={workouts.reps}
                sets={workouts.reps}
              />
            );
          })} 
        </ul>
      </div>
    );
  }
}


export default Workouts;