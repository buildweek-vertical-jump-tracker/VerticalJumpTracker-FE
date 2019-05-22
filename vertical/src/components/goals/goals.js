import React, {Component}from 'react';
import GoalsForm from './goalsForm';
import Goal from './goal';
import Chart from './chart';
import Axios from 'axios';


class Goals extends Component{
    constructor(props) {
        super(props);
        this.state = {
         measurements:[]
        };
    }

componentDidMount() {
    Axios
        .get('https://awsafran-vertical.herokuapp.com/users/me')
        .then((res) => {
            //console.log(res.data);
            this.setState({
              measurements: res.data.measurements
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
        <GoalsForm />
    </div>
    )
 }
}
export default Goals;