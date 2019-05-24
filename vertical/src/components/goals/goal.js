import React from 'react';
import './goals.css';

const Goal = props => {
  console.log('goal',props.goal)
  return (
    <div className="Goal">
      <h3 className='goalHeader'>let's reach new heights of <br></br>"{props.goal.goalvertical}" inch  </h3>
      <button className='goalButton' onClick= {(event) => props.deleteGoal(event, props.goal.goalid)}>Delete when complete</button>
    </div>
  );
};

export default Goal;