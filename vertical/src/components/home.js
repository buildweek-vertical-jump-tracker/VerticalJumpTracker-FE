import React, { Component } from 'react';
import Workouts from './workouts/workouts';
import axiosWithAuth from './axiosWithAuth';
//import Axios from 'axios';
import './workouts/Home.css';


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          workouts: props.workouts,
        };
    }

    componentDidMount() {
        axiosWithAuth.get('https://awsafran-vertical.herokuapp.com/workouts/today')
        .then((res) => {
          console.log(res);
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