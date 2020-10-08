import React from 'react';
import { Card, Button, CardHeader, CardBody } from 'reactstrap';

import "./cardStyling.css";

const CardVegan = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>Vegan Outreach</CardHeader>
        <CardBody className="card-body-about">
          <Button className="buttonStyle-about" href="https://veganoutreach.org/">Website</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardVegan;