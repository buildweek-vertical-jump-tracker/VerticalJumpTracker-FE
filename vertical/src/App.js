import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Authenticate from './components/Authentication/Authenticate.js';

import { Home, About, Contact, Navigation } from './components/nav';

class App extends Component {
   render() {
    return (
      <div className="App">
        <div className='Nav'>
          <Navigation />
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </div>
      </div>
    );
  }
}

export default Authenticate(App);