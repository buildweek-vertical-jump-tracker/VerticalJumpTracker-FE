import React, {Component} from 'react';
import axiosWithAuth from './axiosWithAuth';


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
     axiosWithAuth() 
     .post('https://awsafran-vertical.herokuapp.com/users', {
       "username":  this.state.username, 
       "password": this.state.password, 
       "height": this.state.height})
     .then(res => {
       console.log(res.data);
       this.setState({
        username:'',
        password:'',
        height:''
        });
     })
     .catch((err) => console.log(err));
    //window.location.reload();
  };



  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="NewUserForm">
        <form onSubmit={this.state.addUser}>
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default NewUserForm; 