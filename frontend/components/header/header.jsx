import React from 'react';
import { hashHistory } from 'react-router';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state= { username: "", password: ""};
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    this.redirect();
  }

  redirect(){
    if (this.props.errors && this.props.errors.length > 0) {
      hashHistory.push("/login");
    }
  }

  handleLogin(e) {
    e.preventDefault();
    let user = this.state;
    this.props.login({user});
  }

  handleLogout(e) {
    e.preventDefault();
    this.setState({username: "", password: ""});
    this.props.logout();
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    if (!this.props.currentUser) {
      return(
        <form className="login-form" onSubmit={this.handleLogin}>
          <label>Username:
            <input
              onChange={this.handleChange('username')}
              type='text'
              placeholder='username'
              value={this.state.username}/>
          </label>

          <label>Password:
            <input
              onChange={this.handleChange('password')}
              type='password'
              placeholder='password'
              value={this.state.password}/>
          </label>
          <button>Log In</button>
        </form>
      );
    } else {
      return(
        <section className='group'>
          <button className='log-out'onClick={this.handleLogout}>Log Out</button>
          <h3 className='user-panel'>Logged in as: {this.props.currentUser.username}</h3>
        </section>
      );
    }
  }

}
