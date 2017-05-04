import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUp2 = ({
  onSubmit,
  onChange,
  back2,
  errors,
  user,
  tabView
}) => (
  <div className="text-center">
    <h2 className="card-heading">Sign Up</h2>

    {errors.summary && <p className="error-message">{errors.summary}</p>}
    
    <div className="button-line">
      <RaisedButton type="submit" label="Continue" onClick={onSubmit} primary />
    </div>

    <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
  </div>
);

SignUp2.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  back2: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  tabView: PropTypes.object.isRequired
};

export default SignUp2;