import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUp0 = ({
  onChange,
  next0,
  errors,
  user,
  tabView
}) => (
  <div className="text-center">
    <h2 className="card-heading">Sign Up</h2>

    {errors.summary && <p className="error-message">{errors.summary}</p>}

    <div className="field-line">
      <TextField
        floatingLabelText="First Name"
        name="firstName"
        errorText={errors.firstName}
        onChange={onChange}
        value={user.firstName}
      />
    </div>

    <div className="field-line">
      <TextField
        floatingLabelText="Last Name"
        name="lastName"
        errorText={errors.lastName}
        onChange={onChange}
        value={user.lastName}
      />
    </div>

    <div className="field-line">
      <TextField
        floatingLabelText="Company Email"
        name="email"
        errorText={errors.email}
        onChange={onChange}
        value={user.email}
      />
    </div>

    <div className="field-line">
      <TextField
        floatingLabelText="Password"
        type="password"
        name="password1"
        errorText={errors.password1}
        onChange={onChange}
      />
    </div>

    <div className="field-line">
      <TextField
        floatingLabelText="Type Password Again"
        type="password"
        name="password2"
        errorText={errors.password2}
        onChange={onChange}
      />
    </div>

    <div className="field-line">
      <TextField
        floatingLabelText="Team Name"
        name="teamName"
        errorText={errors.teamName}
        onChange={onChange}
        value={user.teamName}
      />
    </div>

    <div className="button-line">
      <RaisedButton type="submit" label="Continue" onClick={() => next0('team')} primary />
    </div>

    <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
  </div>
);

SignUp0.propTypes = {
  onChange: PropTypes.func.isRequired,
  next0: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  tabView: PropTypes.object.isRequired
};

export default SignUp0;