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
  <Card className="container">
    <Tabs>
      <Tab label="Team">
        <form action="/" onSubmit={next} className="text-center">
          <h2 className="card-heading">Sign Up</h2>

          {errors.summary && <p className="error-message">{errors.summary}</p>}

          <div className="field-line">
            <TextField
              floatingLabelText="First Name"
              name="firstName"
              errorText={errors.firstName}
              onChange={onChange}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Last Name"
              name="lastName"
              errorText={errors.lastName}
              onChange={onChange}
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

          <div className="button-line">
            <RaisedButton type="submit" label="Continue" primary />
          </div>

          <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
        </form>
      </Tab>
      <Tab label="Individual"/>
    </Tabs>
  </Card>
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