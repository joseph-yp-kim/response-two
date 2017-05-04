import React from 'react';
import { Link } from 'react-router';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const HomePage = () => (
  <Card className="container">
    <CardTitle title="Welcome to Response Two"/>
    <CardText style={{color: '#808080', padding: '16px 32px', lineHeight: '2em'}}>
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
      Marketing Text
    </CardText>
    <div className="button-line">
      <Link to={'/signup'}><RaisedButton label="Get Started" primary /></Link>
      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </div>

  </Card>
);

export default HomePage;