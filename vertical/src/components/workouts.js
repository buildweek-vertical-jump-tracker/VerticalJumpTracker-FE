import React, { Component } from 'react';

import Workout from './workout';

class Workouts extends Component {
  render() {
    return (
      <div className="Workouts">
        <h1>Workouts Done</h1>
        <ul>
          {this.props.workouts.map(workout => {
            return (
              <Workout
                name={workout.name}
                id={workout.id}
                age={workout.age}
                height={workout.height}
                key={workout.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Workout.defaultProps = {
 workouts: [],
};

export default Workouts;