import React from 'react';

const Goal = props => {
  return (
    <div className="Goal">
      <h3>{props.goal}</h3>
      <button onClick= {() => props.deleteGoal()}>Delete</button>
    </div>
  );
};

export default Goal;