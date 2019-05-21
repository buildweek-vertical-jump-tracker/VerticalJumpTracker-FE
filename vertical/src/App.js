import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import './App.css';


import { Home, About, Contact, Navigation } from './components/nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      workouts: [],
      workout: {
        exercise: '',
        reps: '',
        sets: ''
      }
    }
  }

  componentDidMount() {
    Axios.get('https://awsafran-vertical.herokuapp.com/workouts/all')
    .then((res) => {
      console.log(res);
      this.setState({
        workouts: res.data[0],
        workout: this.state.workouts
      });
    })
    .catch((err) => console.log(err));
  }
   render() {
    return (
      <div className="App">
        <div className='Nav'>
          <Navigation />
          <Route exact path="/" render={props => <Home workouts= {this.state.workouts} />}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </div>
      </div>
    );
  }
}

export default App;