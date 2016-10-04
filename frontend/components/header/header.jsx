import React from 'react';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state= { username: "", password: ""};
    this.handleSubmit = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    let user = this.state;
    this.props.login({user});
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    if (!this.props.currentUser) {
      return(
        <form className="login-form" onSubmit={this.handleSubmit}>
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
        <section>
          <h3>Logged in as: {this.props.currentUser.username}</h3>
          <button>Log Out</button>
        </section>
      );
    }
  }

}
