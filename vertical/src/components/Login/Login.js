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
      
		.get('https://awsafran-vertical.herokuapp.com/users/me')
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
		<div className='mainContainer'>
			<div className='loginContainer'>
				<div className='main'>
					<h3>Please login to continue</h3>
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
		</div>
		);
	}
}

export default Login;