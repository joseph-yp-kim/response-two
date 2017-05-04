import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Monthly from './Monthly.jsx';
import OneTime from './OneTime.jsx';

const SignUp1 = ({
  updateUserNum,
  changePayment,
  updateMonths,
  next1,
  back1,
  errors,
  user,
  accountPlan,
  tabView
}) => (
  <div className="text-center">
    <h2 className="card-heading">Plan Type</h2>
      <div className="drop-down">
        <CardText>Total Users: </CardText>
        <DropDownMenu value={accountPlan.users} onChange={updateUserNum}>
          <MenuItem value={1} primaryText={1} />
          <MenuItem value={2} primaryText={2} />
          <MenuItem value={3} primaryText={3} />
          <MenuItem value={4} primaryText={4} />
          <MenuItem value={5} primaryText={5} />
          <MenuItem value={6} primaryText={6} />
          <MenuItem value={7} primaryText={7} />
          <MenuItem value={8} primaryText={8} />
          <MenuItem value={9} primaryText={9} />
          <MenuItem value={10} primaryText={10} />
          <MenuItem value={11} primaryText={11} />
          <MenuItem value={12} primaryText={12} />
          <MenuItem value={13} primaryText={13} />
          <MenuItem value={14} primaryText={14} />
          <MenuItem value={15} primaryText={15} />
          <MenuItem value={16} primaryText={16} />
          <MenuItem value={17} primaryText={17} />
          <MenuItem value={18} primaryText={18} />
          <MenuItem value={19} primaryText={19} />
          <MenuItem value={20} primaryText={20} />
        </DropDownMenu>
      </div>

    <RadioButtonGroup defaultSelected="SUB" name="paymentType" onChange={changePayment}>
      <RadioButton style={{ display: 'inline-block', width: '150px' }} label="Monthly" value="SUB" name="monthly"/>
      <RadioButton style={{ display: 'inline-block', width: '150px' }} label="One Time" value="ONE" name="one_time"/>
    </RadioButtonGroup>

    {accountPlan.subscription ?
      <Monthly accountPlan={accountPlan} /> :
      <OneTime updateMonths={updateMonths} accountPlan={accountPlan} />
    }

    <div className="button-line">
      <RaisedButton style={{margin: '0px 10px'}} type="submit" label="Back" onClick={() => back1('team')} secondary />
      <RaisedButton style={{margin: '0px 10px'}} type="submit" label="Continue" onClick={() => next1('team')} primary />
    </div>

    <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
  </div>
);

SignUp1.propTypes = {
  updateUserNum: PropTypes.func.isRequired,
  changePayment: PropTypes.func.isRequired,
  updateMonths: PropTypes.func.isRequired,
  next1: PropTypes.func.isRequired,
  back1: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  accountPlan: PropTypes.object.isRequired,
  tabView: PropTypes.object.isRequired
};

export default SignUp1;