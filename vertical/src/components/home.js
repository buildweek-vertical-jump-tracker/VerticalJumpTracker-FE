import React, { Component } from 'react';
import Workouts from './workouts/workouts';
import axiosWithAuth from './axiosWithAuth';
import './workouts/Home.css';



class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          workouts: [],

        };
    }

    componentDidMount() {
      console.log("home is calling you");
      axiosWithAuth().get('https://awsafran-vertical.herokuapp.com/workouts/today')
      
        .then((res) => {
           //console.log(res);
           this.setState({
              today: res.data                       
            });
          })
          .catch((err) => console.log(err));
      
      axiosWithAuth().get('https://awsafran-vertical.herokuapp.com/workouts/all')
      .then((res) => {
              //console.log(res);
              this.setState({
                workouts: res.data[0],
                
              });
            })
            .catch((err) => console.log(err));
    }

    render(){
        return (
            <div className='mainHome'>
                <h1>Home</h1>
                <Workouts workouts={this.state.workouts} today={this.state.today} />
            </div>
        );
    };
} 

export default Home;