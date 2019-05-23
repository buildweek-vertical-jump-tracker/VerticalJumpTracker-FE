import React from 'react';

import './Home.css';

const Workout = props => {
  return (
    <div className="Workout">
      <h3>{props.exercise}</h3>
      <p>{props.reps} reps</p>
      <br/>
      <p>{props.sets} sets </p>
    </div>
  );
};

export default Workout;