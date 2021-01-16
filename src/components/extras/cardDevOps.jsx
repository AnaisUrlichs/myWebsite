import React from 'react';
import { Card, Button, CardHeader, CardBody } from 'reactstrap';

import "./cardStyling.css";


const CardDevOps = () => {
  return (
    <div>
      <Card>
        <CardHeader>DevOps tutorials, challenges, projects, and more</CardHeader>
        <CardBody className="card-body-about">
          <Button className="buttonStyle-about" href="https://www.youtube.com/channel/UCb4mfRT5UWpjoUQRcIE2qOQ?sub_confirmation=1">YouTube</Button>
        </CardBody>
      </Card>
      <div className="cardDivider"/>
      <Card>
        <CardHeader>Weekly free learning resources around DevOps and CS</CardHeader>
        <CardBody className="card-body-about">
          <Button className="buttonStyle-about" href="https://blog.anaisurl.com/#/portal/signup">Newsletter</Button>
        </CardBody>
      </Card>
      <div className="cardDivider"/>
      <Card>
        <CardHeader>All of my DevOps related notes are publicly available</CardHeader>
        <CardBody className="card-body-about">
          <Button className="buttonStyle-about" href="https://devops.anaisurl.com/">DevOps Learning Bank</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardDevOps;