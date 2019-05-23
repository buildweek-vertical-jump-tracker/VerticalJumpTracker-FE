import React, { Component } from 'react';
import Workout from './workout';
import Today from './today';

import axiosWithAuth from '../axiosWithAuth';


class Workouts extends Component {
  constructor(props){
    super(props);
      this.state = {
        userId: ''
      }
    }

  componentDidMount() {
    axiosWithAuth().get('https://awsafran-vertical.herokuapp.com/users/me')
    .then((res) => {
        //console.log(res.data);
        this.setState({
         userId:res.data.userid,        
          })              
      })
      .catch((err) => console.log(err));
}

  incrementWorkout() {
    axiosWithAuth().get(`https://awsafran-vertical.herokuapp.com/workouts/${this.state.userId}`)
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