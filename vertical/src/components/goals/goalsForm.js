import React, { Component } from 'react';


class GoalsForm
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: ''
    };
  }

  addGoal = (event) => {
    event.preventDefault();
    this.setState({
      goal:''
    })
    this.props.addGoal(event, this.state.goal)
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="GoalsForm">
        <form onSubmit={(event) => this.addGoal(event)}>
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