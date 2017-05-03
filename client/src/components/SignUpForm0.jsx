import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';


const SignUpForm0 = ({
  onSubmit,
  onChange,
  next,
  errors,
  user,
  tab
}) => (
  <div>
    {errors.summary && <p className="error-message">{errors.summary}</p>}

    <div className="field-line">
      <TextField
        floatingLabelText="Company Email"
        name="email"
        errorText={errors.email}
        onChange={onChange}
      />
    </div>

    <div className="field-line">
      <TextField
        floatingLabelText="Team Name"
        name="teamName"
        errorText={errors.teamName}
        onChange={onChange}
      />
    </div>

    <div className="button-line">
      <RaisedButton type="submit" label="Continue" primary />
    </div>

  </div>
);

SignUpForm0.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  tab: PropTypes.object.isRequired
};

export default SignUpForm0;