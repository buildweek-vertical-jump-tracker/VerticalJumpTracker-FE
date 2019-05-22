import React from 'react';

const Today = props => {
  return (
    <div className="Today">
      <h3>{props.exercise}</h3>
      <strong>{props.reps} reps</strong>
      <br/>
      <strong>{props.sets} sets </strong>
    </div>
        
  
  );
};

export default Today;