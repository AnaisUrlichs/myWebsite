import React from 'react';
import { Card, Button, CardHeader, CardBody } from 'reactstrap';

import "./cardStyling.css";


const Mentorship = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>GirlCode</CardHeader>
        <CardBody className="card-body-about">
          <Button className="buttonStyle-about" href="https://www.girl-code.co.uk/">Website</Button>
        </CardBody>
      </Card>
      <div className="cardDivider"/>
      <Card>
        <CardHeader>Vegan Outreach</CardHeader>
        <CardBody className="card-body-about">
          <Button className="buttonStyle-about" href="https://veganoutreach.org/">Website</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Mentorship;