import React, { Component } from 'react';
import Axios from 'axios';

class WorkoutForm
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: '',
      reps: '',
      sets: ''
    };
  }

  addWorkout = event => {
    event.preventDefault();
    Axios 
    .post('https://awsafran-vertical.herokuapp.com/workouts/all', this.state.workouts)
    .then(res => {
      console.log(res);
      this.setState({
        workouts: res.data,
        exercise: '',
        reps: '',
        sets: ''
      });
    })
    .catch((err) => console.log(err));
    //window.location.reload();
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="WorkoutForm
      ">
        <form onSubmit={this.addWorkout}>
          <input
            onChange={this.handleInputChange}
            placeholder="exercise"
            value={this.state.exerciseName}
            name="exercise"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="reps"
            value={this.state.reps}
            name="reps"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="sets"
            value={this.state.sets}
            name="sets"
          />
          <button type="submit">Add workout</button>
        </form>
      </div>
    );
  }
}

export default WorkoutForm;