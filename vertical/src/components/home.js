import React, { Component } from 'react';
import Workouts from './workouts';
import Axios from 'axios';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          workouts: props.workouts,
        };
    }
    componentDidMount() {
        Axios.get('https://awsafran-vertical.herokuapp.com/workouts/today')
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
            <div>
                <h1>Home</h1>
                <Workouts workouts={this.props.workouts} today={this.state.today} />
            </div>
        );
    };
} 

export default Home;