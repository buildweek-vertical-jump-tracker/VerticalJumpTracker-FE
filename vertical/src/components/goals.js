import React from 'react';
import GoalsForm from './goalsForm';
import Goal from './goal';
import Chart from './chart';


const Goals = () => 
    <div>
        <h1>Progress</h1>
        <Chart />
        <h1>Goals</h1>
        <p>Let's make S.M.A.R.T. Goals</p>
        <Goal />
        <GoalsForm />
    </div>;

export default Goals;