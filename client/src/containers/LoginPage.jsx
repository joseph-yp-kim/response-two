import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm.jsx';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(event) {
    event.preventDefault();

    const errors = {};
    if (!this.state.user.email.length) errors.email = 'Please provide an email';
    if (!this.state.user.password.length) errors.password = 'Please provide a password';
    if (!Object.keys(errors).length) {
      console.log('email:', this.state.user.email);
      console.log('password:', this.state.user.password);
    } 
    this.setState({
      errors
    });
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;