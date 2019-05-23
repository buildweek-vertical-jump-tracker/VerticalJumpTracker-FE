import React, { Component } from 'react';


class GoalsForm
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: ''
    };
  }

  



  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="GoalsForm">
        <form onSubmit={this.props.addGoal}>
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