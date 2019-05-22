import React, { Component } from 'react';
import Axios from 'axios';

class GoalsForm
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: '',
      plan: ''
    };
  }

  addWorkout = event => {
    event.preventDefault();
    Axios 
    .post('https://awsafran-vertical.herokuapp.com/goal/all', this.state.goal)
    .then(res => {
      console.log(res);
      this.setState({
        goal: res.data,
        plan: ''
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
      <div className="GoalsForm
      ">
        <form onSubmit={this.addWorkout}>
          <input
            onChange={this.handleInputChange}
            placeholder="goal"
            value={this.state.goal}
            name="goal"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="plan"
            value={this.state.plan}
            name="plan"
          />
          <button type="submit">Start Goal</button>
        </form>
      </div>
    );
  }
}

export default GoalsForm;