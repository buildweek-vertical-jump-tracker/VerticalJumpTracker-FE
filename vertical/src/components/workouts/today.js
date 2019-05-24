import React from 'react';

import './Home.css';

const Today = props => {
  return (
    <div className="Today">
      <h3 className='todayH3'>{props.exercise}</h3>
      <p className='todayP'>{props.reps} reps</p>
      <br/>
      <p className='todayP'>{props.sets} sets </p>
    </div>
        
  
  );
};

export default Today;