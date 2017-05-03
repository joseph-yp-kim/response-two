import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import SignUpForm0 from '../components/SignUpForm0.jsx';
import SignUpForm1 from '../components/SignUpForm1.jsx';
import SignUpForm2 from '../components/SignUpForm2.jsx';
import SignUpForm3 from '../components/SignUpForm3.jsx';


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  tab
}) => (
  <Card className="container">
    <Tabs>
      <Tab label="Team">
        <form action="/" onSubmit={onSubmit} className="text-center">
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
              floatingLabelText="Company Email"
              name="email"
              errorText={errors.email}
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

          <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
        </form>
      </Tab>
      <Tab label="Individual"/>
    </Tabs>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  tab: PropTypes.object.isRequired
};

export default SignUpForm;