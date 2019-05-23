import React, { Component } from 'react';
import Workout from './workout';
import Today from './today';

import axiosWithAuth from '../axiosWithAuth';


class Workouts extends Component {

  incrementWorkout() {
    axiosWithAuth().get('https://awsafran-vertical.herokuapp.com/workouts/3')
     .then((res) => {
       //console.log(res);
       })
     console.log('button clicked')
  }

  render() {
    //console.log(this.props);
    return (
      <div className="Workouts">
        <h1>Today's Workouts</h1>
        <ul>
        {this.props.today && this.props.today.exercises.map(workouts => { 
          return (
            <Today 
              key={workouts.exerciseid}
              exercise={workouts.exerciseName}
              reps={workouts.reps}
              sets={workouts.reps}
            /> 
          );
        })}
        </ul>
        <button onClick = {() => this.incrementWorkout()}>Mark Complete</button>
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