import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const OneTime = ({
  updateMonths,
  accountPlan
}) => (
  <Card style={{ width: '250px', height: '160px', margin: '20px auto'}}>
    <CardTitle> ${accountPlan.cost} USD/user/month</CardTitle>
    <div className='drop-down'>
      <CardText>Months: </CardText>
      <DropDownMenu value={accountPlan.months} onChange={updateMonths}>
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
      </DropDownMenu>
    </div>

    <CardText style={{ color: '#B3B3B3' }} >Total: ${accountPlan.cost * accountPlan.users * accountPlan.months} for {accountPlan.months} months</CardText>
  </Card>
);

OneTime.propTypes = {
  updateMonths: PropTypes.func.isRequired,
  accountPlan: PropTypes.object.isRequired
};

export default OneTime;