import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import SignUp0 from './SignUp0.jsx';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  tabView
}) => (
  <Card className="container">
    <Tabs>
      <Tab label="Team">
        <SignUp0
          onSubmit={onSubmit}
          onChange={onChange}
          errors={errors}
          user={user}
          tabView={tabView}
        />
      </Tab>
      <Tab label="Individual">
      </Tab>
    </Tabs>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  tabView: PropTypes.object.isRequired
};

export default SignUpForm;