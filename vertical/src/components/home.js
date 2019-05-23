import React, { Component } from 'react';
import Workouts from './workouts/workouts';
import axiosWithAuth from './axiosWithAuth';
import './workouts/Home.css';
import Axios from 'axios';


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          workouts: props.workouts,
        };
    }

    componentDidMount() {
      const token = localStorage.getItem('token');
      //    axiosWithAuth.get('https://awsafran-vertical.herokuapp.com/workouts/today')
      Axios.get('https://awsafran-vertical.herokuapp.com/workouts/today', {headers:{ 'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`}})
          .then((res) => {
           //console.log(res);
           this.setState({
              today: res.data
                       
            });
          })
          .catch((err) => console.log(err));
      }
    render(){
        return (
            <div className='mainHome'>
                <h1>Home</h1>
                <Workouts workouts={this.props.workouts} today={this.state.today} />
            </div>
        );
    };
} 

export default Home;