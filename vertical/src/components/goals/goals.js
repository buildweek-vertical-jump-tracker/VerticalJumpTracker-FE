import React, {Component}from 'react';
import GoalsForm from './goalsForm';
import Goal from './goal';
import Chart from './chart';

import axiosWithAuth from '../axiosWithAuth';


class Goals extends Component{
    constructor(props) {
        super(props);
        this.state = {
         measurements:[],
         userId:'', 
         goalsList: []
        };
    }

componentDidMount() {
        axiosWithAuth().get('https://awsafran-vertical.herokuapp.com/users/me')
        .then((res) => {
            console.log(res.data);
            this.setState({
              measurements: res.data.measurements,
              userId:res.data.userid,
              goalsList: res.data.goals,
              
            })              
          })
          .catch((err) => console.log(err));
}

addGoal = (event, goal) => {
    event.preventDefault();
     axiosWithAuth() 
     .post(`https://awsafran-vertical.herokuapp.com/goals/${this.state.userId}`, {"goalvertical":  goal})
     .then(res => {
       console.log(res.data);
       this.setState({
         goalsList: []
        });
     })
     .catch((err) => console.log(err));
    //window.location.reload();
  };


render() { 
    return(
    <div>
        <h1>Progress</h1>
        {this.state.measurements.length > 0 &&  <Chart measurements={this.state.measurements} />}
        <h1>Goals</h1>
        <p>Let's make S.M.A.R.T. Goals</p>
        {this.state.goalsList.map(goal => <Goal goal={3}/>)}
        <GoalsForm userId={this.state.userId} addGoal={this.addGoal} />
    </div>
    )
 }
}
export default Goals;