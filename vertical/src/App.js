import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import { Home, Goals, Navigation } from './components/nav';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute';
import NewUserForm from './components/NewUserForm';

const App = () => {
      return (
      <div className="App">
        <div className='Nav'>
          <Navigation />
          <Route exact path='/login' component={Login}></Route>
          <PrivateRoute exact path="/home" component= {Home}></PrivateRoute>
          <PrivateRoute path="/goals" component={Goals}></PrivateRoute>
          <Route path='/newUser' component={NewUserForm}></Route>
        </div>
      </div>
    );
  }


export default App;