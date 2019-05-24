import React from 'react';

const Goal = props => {
  console.log('goal',props.goal)
  return (
    <div className="Goal">
      <h3>{props.goal.goalvertical}</h3>
      <button onClick= {(event) => props.deleteGoal(event, props.goal.goalid)}>Delete</button>
    </div>
  );
};

export default Goal;