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
         goalsList: [],
         goalid: ''
        };
    }

componentDidMount() {
        this.getThat();
}

getThat = () => {
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
    //console.log(goal);
     axiosWithAuth() 
     .post(`https://awsafran-vertical.herokuapp.com/goals/${this.state.userId}`, {"goalvertical":  parseInt(goal)})
     .then(res => {
       //console.log(res.data);
       this.setState({
         goalsList: res.data
        });
     })
     .catch((err) => console.log(err));
    //window.location.reload();
  };

  deleteGoal = (event , goalid) => {
    event.preventDefault();
    axiosWithAuth()
    .delete(`https://awsafran-vertical.herokuapp.com/goals/delete/${goalid}`)
    .then(res => {
      console.log('this is res' , res);
      this.getThat();
    })
    .catch((err) => console.log(err));
  }

render() { 
    return(
    <div>
        <h1>Progress</h1>
        {this.state.measurements.length > 0 &&  <Chart measurements={this.state.measurements} />}
        <h1>Goals</h1>
        <p>Let's make S.M.A.R.T. Goals</p>
        {this.state.goalsList.map(goal => <Goal deleteGoal={this.deleteGoal} goal={goal}/>)}
        <GoalsForm userId={this.state.userId} addGoal={this.addGoal} />
    </div>
    )
 }
}
export default Goals;