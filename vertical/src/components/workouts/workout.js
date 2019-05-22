import React from 'react';

const Workout = props => {
  return (
    <div className="Workout">
      <h3>{props.exercise}</h3>
      <strong>{props.reps} reps</strong>
      <br/>
      <strong>{props.sets} sets </strong>
    </div>
  );
};

export default Workout;