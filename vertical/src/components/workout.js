import React from 'react';

const Workout = props => {
  return (
    <div className="Workout">
      <h3>{props.name}</h3>
      <strong>{props.reps} reps</strong>
      <strong>{props.sets} sets </strong>
    </div>
  );
};

Workout.defaultProps = {
  name: '',
  reps: '',
  sets: ''
};

export default Workout;