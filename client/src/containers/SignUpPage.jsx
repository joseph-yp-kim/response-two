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
      },
      payment: {

      },
      tab: {
        current: 'team',
        tab0: 'SignUpForm0',
        tab1: 0
      }
    };

    this.changeUser = this.changeUser.bind(this);
    this.next = this.next.bind(this);
    this.processForm = this.processForm.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  next(event) {
    event.preventDefault();

    console.log('check default');
    const tab = this.state.tab;

    if (tab.current === 0) {
      tab.tab0 += 1;
    }
    if (tab.current === 1) {
      tab.tab1 += 1;
    }

    this.setState({
      tab
    })
  }

  processForm(event) {
    event.preventDefault();

    const errors = {};
    if (!this.state.user.firstName.length) errors.firstName = 'Please provide a first name';
    if (!this.state.user.lastName.length) errors.lastName = 'Please provide a last name';
    if (!this.state.user.email.length) errors.email = 'Please provide your company email';
    if (!this.state.user.password1.length) errors.password1 = 'Please provide a password';
    if (this.state.user.password1 !== this.state.user.password2) errors.password2 = 'Password does not match';
    if (!this.state.user.teamName.length) errors.teamName = 'Please provide a team name';
    if (!Object.keys(errors).length) {
      console.log('first name:', this.state.user.firstName);
      console.log('last name:', this.state.user.lastName);
      console.log('email:', this.state.user.email);
      console.log('password:', this.state.user.password);
      console.log('team name:', this.state.user.teamName);
    } 
    console.log(errors);
    this.setState({
      errors
    });

    // if (this.state.user.password1 !== this.state.user.password2) {
    //   const errors = this.state.errors;
    //   errors.password = 'Password does not match';
    //   this.setState({
    //     errors
    //   });
    // } else {
    //   console.log('first name:', this.state.user.firstName);
    //   console.log('last name:', this.state.user.lastName);
    //   console.log('email:', this.state.user.email);
    //   console.log('password:', this.state.user.password);
    //   console.log('team name:', this.state.user.teamName);
    // }
  }

  render() {

    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
        tab={this.state.tab}
      />
    );

  }

}

export default SignUpPage;