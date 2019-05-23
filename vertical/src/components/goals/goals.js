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
         userId:''
        };
    }

componentDidMount() {
        axiosWithAuth().get('https://awsafran-vertical.herokuapp.com/users/me')
        .then((res) => {
            console.log(res.data);
            this.setState({
              measurements: res.data.measurements,
              userId:res.data.userid
            })              
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
        <Goal />
        <GoalsForm userId={this.state.userId}/>
    </div>
    )
 }
}
export default Goals;