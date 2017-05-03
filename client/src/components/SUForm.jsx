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


const SUForm = ({
  onSubmit,
  onChange,
  next,
  errors,
  user,
  tab
}) => (
  const formNum = tab.tab0;
  const name = 'SignUpForm' + formNum.toString();
  <Card className="container">
    <Tabs>
      <Tab label="Team">
        <form action="/" onSubmit={next} className="text-center">
          <h2 className="card-heading">Sign Up</h2>

          <name 
            onSubmit={onSubmit}
            onChange={onChange}
            next={next}
            errors={errors}
            user={user}
            tab={tab}
          />

          <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
        </form>
      </Tab>
      <Tab label="Individual"/>
    </Tabs>
  </Card>
);

SUForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  tab: PropTypes.object.isRequired
};

export default SUForm;