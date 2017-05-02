import React, { PropTypes } from 'react';
import SignUpForm from '../components/SignUpForm.jsx';


class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password1: '',
        password2: '',
        teamName: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  processForm(event) {
    event.preventDefault();

    if (this.state.user.password1 !== this.state.user.password2) {
      const errors = this.state.errors;
      errors.password = 'Password does not match'
      this.setState({
        errors
      })
    } else {
      console.log('first name:', this.state.user.firstName);
    console.log('last name:', this.state.user.lastName);
    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);
    console.log('team name:', this.state.user.teamName);
    }
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default SignUpPage;