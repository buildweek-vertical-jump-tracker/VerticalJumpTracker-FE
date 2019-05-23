import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import { Home, Goals, Contact, Navigation } from './components/nav';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
      return (
      <div className="App">
        <div className='Nav'>
          <Navigation />
          <Route exact path='/login' component={Login}></Route>
          <PrivateRoute exact path="/home" component= {Home}></PrivateRoute>
          <PrivateRoute path="/goals" component={Goals}></PrivateRoute>
          <PrivateRoute path="/contact" component={Contact}></PrivateRoute>
        </div>
      </div>
    );
  }


export default App;