import React from 'react';

import './Home.css';

const Workout = props => {
  return (
    <div className="Workout">
      <h3 className='homeH3'>{props.exercise}</h3>
      <p className='homeP'>{props.reps} reps</p>
      <br/>
      <p className='homeP'>{props.sets} sets </p>
    </div>
  );
};

export default Workout;