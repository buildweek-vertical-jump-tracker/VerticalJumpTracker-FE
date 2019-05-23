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
	fetch("https://awsafran-vertical.herokuapp.com/oauth/token", {
		body: `grant_type=password&username=${this.state.username}&password=${this.state.password}`,
		headers: {
			Authorization: "Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		method: "POST"
	}).then(res => res.json()).then(res =>{
	localStorage.setItem('token', res.access_token);
	this.props.history.push('/home')
	})
	.catch( err => {
		console.log(err);
	});
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