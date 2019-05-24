import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	recordAuth = () => {  
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
		//this.setState({login: true});
		//console.log(res);
		})
		.catch( err => {
			console.log(err);
		});
		
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
						required
						type="text"
						placeholder="username"
						name="username"
						onChange={this.changeHandler}						
					/>
					<p>Enter your password:</p>
					<input
						password
						required
						placeholder="password"
						name="password"
						onChange={this.changeHandler}
						type="password"
					/>
					<button onClick={() => this.recordAuth()}>login</button>
				</div>
				<div className="signUpToday">
					Sign up today for <Link to='/newUser' className="free">free</Link>!!
				</div>
			</div>			
		</div>
		);
	}
}

export default Login;