import React from 'react';
import './Login.css';


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	recordAuth = (event) => {
		const user = this.state.username;
		const pw = this.state.password;
		const axios = require("axios");


  var reqData = {
    username: user,
    password: pw,
    grant_type: "password"
  };

  var queryString = Object.keys(reqData)
    .map(key => key + "=" + reqData[key])
    .join("&");

  axios
    .request({
      url: "https://awsafran-vertical.herokuapp.com/users/me",
      method: "post",
      withCredentials: true,
      auth: {
        username: "lambda-client", // This is the client_id
        password: "lambda-secret" // This is the client_secret,
      },

      data: queryString
    })
    .then(respose => {
      console.log(respose);
    })
    .catch(error => {
      console.log(error);
    });
		localStorage.setItem('username', JSON.stringify(user));
		localStorage.setItem('password', JSON.stringify(pw));
		window.location.reload();
	};

	render() {
		return (
			<div className='loginContainer'>
				<div>
					<p>Enter your username:</p>
					<input
						userName
						type="text"
						placeholder="username"
						name="username"
						onChange={this.changeHandler}
						value={this.state.username}
					/>
					<p>Enter your password:</p>
					<input
						password
						placeholder="password"
						name="password"
						onChange={this.changeHandler}
						value={this.state.password}
						type="password"
					/>
					<button onClick={this.recordAuth}>login</button>
				</div>
				<div className="signUpToday">
					Sign up today for <span className="free">free</span>!!
				</div>
			</div>
		);
	}
}

export default Login;