import React, { PropTypes } from 'react';
import SignUpForm from '../components/SignUpForm.jsx';
import SignUpCard from './SignUpCard.jsx';


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
        teamName: '',
        admin: false
      },
      accountPlan: {
        users: 1,
        subscription: true,
        months: 1,
        teamMembers: [],
        cost: 40
      },
      tabView: {
        team: 0,
        individual: 0
      },
    };

    this.changeUser = this.changeUser.bind(this);
    this.changePayment = this.changePayment.bind(this);
    this.updateMonths = this.updateMonths.bind(this);
    this.next0 = this.next0.bind(this);
    this.back1 = this.back1.bind(this);
    this.next1 = this.next1.bind(this);
    this.back2 = this.back2.bind(this);
    this.processForm = this.processForm.bind(this);
    this.updateUserNum = this.updateUserNum.bind(this);
  }

  changeUser(event) {
    const user = this.state.user;
    const field = event.target.name;
    user[field] = event.target.value;

    this.setState({
      user: user
    });
  }

  updateUserNum(event, index, value) {
    console.log(value);
    const accountPlan = JSON.parse(JSON.stringify(this.state.accountPlan));
    accountPlan.users = value;
    this.setState({
      accountPlan : accountPlan
    })
  }

  changePayment(event, value) {
    let subscription;
    const accountPlan = JSON.parse(JSON.stringify(this.state.accountPlan));
    if (value === 'SUB') subscription = true;
    else subscription = false;
    accountPlan.subscription = subscription;
    this.setState({
      accountPlan: accountPlan
    })
  }

  updateMonths(event, index, value) {
    const accountPlan = JSON.parse(JSON.stringify(this.state.accountPlan));
    accountPlan.months = value;
    this.setState({
      accountPlan : accountPlan
    })
  }

  next0(currentTab) {
    console.log('hitting next');
    const tabView = JSON.parse(JSON.stringify(this.state.tabView));
    tabView[currentTab] += 1;
    const errors = {};
    if (!this.state.user.firstName.length) errors.firstName = 'Please provide a first name';
    if (!this.state.user.lastName.length) errors.lastName = 'Please provide a last name';
    if (!this.state.user.email.length) errors.email = 'Please provide your company email';
    if (!this.state.user.password1.length) errors.password1 = 'Please provide a password';
    if (this.state.user.password1.length < 8) errors.password1 = 'Please must be at least 8 characters';
    if (this.state.user.password1 !== this.state.user.password2) errors.password2 = 'Password does not match';
    if (!this.state.user.teamName.length) errors.teamName = 'Please provide a team name';
    if (!Object.keys(errors).length) {
      this.setState({
        tabView: tabView
      })
    } else {
      this.setState({
        errors : errors
      });
    }
  }

  next1() {
  }

  back1(currentTab) {
    console.log('hitting back1');
    const tabView = JSON.parse(JSON.stringify(this.state.tabView));
    tabView[currentTab] -= 1;
    const user = this.state.user;
    user.password1 = '';
    user.password2 = '';
    this.setState({
      user: user,
      tabView: tabView
    });
  }

  back2() {

  }

  processForm(event) {
    event.preventDefault();

  }

  render() {
    return (
      <SignUpCard
        onSubmit={this.processForm}
        onChange={this.changeUser}
        updateUserNum={this.updateUserNum}
        changePayment={this.changePayment}
        updateMonths={this.updateMonths}
        next0={this.next0}
        back1={this.back1}
        next1={this.next1}
        back2={this.back2}
        errors={this.state.errors}
        user={this.state.user}
        accountPlan={this.state.accountPlan}
        tabView={this.state.tabView}
      />
    );

  }

}

export default SignUpPage;