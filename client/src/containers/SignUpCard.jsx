import React, { PropTypes } from 'react';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import Card from 'material-ui/Card';
import SignUp0 from '../components/SignUp0.jsx';
import SignUp1 from '../components/SignUp1.jsx';
import SignUp2 from '../components/SignUp2.jsx';


class SignUpCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let currentForm;
    if (this.props.tabView.team === 0) {
      currentForm = <SignUp0
                      onChange={this.props.onChange}
                      next0={this.props.next0}
                      errors={this.props.errors}
                      user={this.props.user}
                      tabView={this.props.tabView}
                    />;
    } else if (this.props.tabView.team === 1) {
      currentForm = <SignUp1
                      updateUserNum={this.props.updateUserNum}
                      changePayment={this.props.changePayment}
                      updateMonths={this.props.updateMonths}
                      next1={this.props.next1}
                      back1={this.props.back1}
                      errors={this.props.errors}
                      user={this.props.user}
                      accountPlan={this.props.accountPlan}
                      tabView={this.props.tabView}
                    />;
    } else if (this.props.tabView.team === 2) {
      currentForm = <SignUp2
                      onSubmit={this.props.onSubmit}
                      onChange={this.props.onChange}
                      back2={this.props.back2}
                      errors={this.props.errors}
                      user={this.props.user}
                      tabView={this.props.tabView}
                    />;
    }
    return (
      <Card className="container">
        <Tabs>
          <Tab label="Team">
            {currentForm}
          </Tab>
          <Tab label="Individual">
          </Tab>
        </Tabs>
      </Card>
    );
  }
}

export default SignUpCard;