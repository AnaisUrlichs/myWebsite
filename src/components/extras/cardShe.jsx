import React from 'react';
import { Card, Button, CardHeader, CardBody } from 'reactstrap';

import "./cardStyling.css";


const CardShe = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>She256</CardHeader>
        <CardBody className="card-body-about">
          <Button className="buttonStyle-about" href="https://she256.org/">Website</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardShe;