import React, { Component } from 'react';

class WorkoutForm
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      reps: '',
      sets: ''
    };
  }

  addWorkout = event => {
    event.preventDefault();
    // add code to create the workout using the api

    this.setState({
      name: '',
      reps: '',
      sets: ''
    });
  }

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
            placeholder="name"
            value={this.state.name}
            name="name"
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

export default WorkoutForm
;