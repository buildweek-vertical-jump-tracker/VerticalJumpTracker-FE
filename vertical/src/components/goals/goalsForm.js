import React, { Component } from 'react';
import axiosWithAuth from '../axiosWithAuth';

class GoalsForm
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: ''
    };
  }

  addGoal = event => {
    event.preventDefault();
    axiosWithAuth() 
    .post('https://awsafran-vertical.herokuapp.com/goals/3', {"goalvertical":  this.state.goal})
    .then(res => {
      console.log(res.data);
      this.setState({
        goal: ''
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
      <div className="GoalsForm">
        <form onSubmit={this.addGoal}>
          <input
            onChange={this.handleInputChange}
            placeholder="goal"
            value={this.state.goal}
            name="goal"
          />
          <button type="submit">Start Goal</button>
        </form>
      </div>
    );
  }
}

export default GoalsForm;