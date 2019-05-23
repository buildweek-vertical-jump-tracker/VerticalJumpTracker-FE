import React, {Component} from 'react';

import Axios from 'axios';

class NewUserForm
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      height:''
    };
  }

  addUser = (event) => {
    event.preventDefault();
     Axios 
      .post('https://awsafran-vertical.herokuapp.com/newuser', {
        "username":  this.state.username, 
        "password": this.state.password, 
        "height": this.state.height})
      .then(res => {
        //console.log(res);
         this.setState({
          username:'',
          password:'',
          height:''
          });
      })
      .catch((err) => console.log(err));
  };



  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="NewUserForm">
        <form onSubmit={(event) => this.addUser(event)}>
        <input
            onChange={this.handleInputChange}
            placeholder="username"
            value={this.state.username}
            name="username"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="password"
            value={this.state.password}
            name="password"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit" onSubmit={(event) => this.addUser(event)}>Register</button>
        </form>
      </div>
    );
  }
}

export default NewUserForm; 