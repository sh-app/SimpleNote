import React from 'react';
import { hashHistory, Link } from 'react-router';

export default class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


	componentDidUpdate() {
		this.redirect();
	}

	redirect(){
		if (this.props.loggedIn) {
			hashHistory.push("/home");
		}
	}

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    this.props.submitForm({user});
  }

  formSelect() {
    if (this.props.formType==='login') {
      return true;
    }
  }

  render() {

    const buttonValue = this.formSelect() ? 'Log In' : 'Sign Up';
    const linkText = this.formSelect() ? "Don't have an account?" : "Already have an account?";
    const linkValue = this.formSelect() ? "/signup" : "/login";
    const display = this.formSelect() ? {display: 'none'} : {display: ''};
    const displayHeaders = (this.props.formType==='/') ? {display: 'none'} : {display: ''};
    const errorDisplay = this.props.errors[0] ? {display: ''} : {display: 'none'};

    return(
      <div>
      <h2 className="login-message" style={displayHeaders}>Oops!  Looks like you're not logged in!</h2>
      <h2 className="signup-heading" style={displayHeaders}>{buttonValue}</h2>
      <div className="signup-form-container">
        <p className='errors' style={errorDisplay}>{this.props.errors[0]}</p>
        <form  onSubmit={this.handleSubmit}>

            <label htmlFor='username'>Username:</label>
            <input
              id='username'
              onChange={this.handleChange('username')}
              type='text'
              placeholder='username'
              value={this.state.username}/>

            <label style={display} htmlFor='email'>E-mail:</label>
            <input
              id='email'
              style={display}
              onChange={this.handleChange('email')}
              type='email'
              placeholder='e-mail address'
              value={this.state.email}/>

            <label htmlFor='password'>Password:</label>
            <input
              id='password'
              onChange={this.handleChange('password')}
              type='password'
              placeholder='* * * * * *'
              value={this.state.password}/>

            <button>{buttonValue.toUpperCase()}</button>
        </form>
        <Link style={displayHeaders} to={linkValue}>{linkText}</Link>
      </div>
    </div>
    );
  }

}
