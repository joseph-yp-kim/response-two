import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Monthly = ({
  accountPlan
}) => (
    <Card style={{ width: '250px', height: '100px', margin: '20px auto'}}>
      <CardTitle> ${accountPlan.cost} USD/user/month</CardTitle>  
      <CardText style={{ color: '#B3B3B3' }}>${accountPlan.cost * accountPlan.users} billed monthly</CardText>
    </Card>
);

Monthly.propTypes = {
  accountPlan: PropTypes.object.isRequired
};

export default Monthly;