import React from 'react';

const Goal = props => {
  return (
    <div className="Goal">
      <h3>{props.goal}</h3>
      <strong>{props.plan} </strong>
    </div>
  );
};

export default Goal;