import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';


const CardVegan = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>Vegan Outreach</CardHeader>
        <CardBody>
          <Button href="https://veganoutreach.org/" style={{backgroundColor: "#6b0000", borderColor: "white", color: "white"}}>Website</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardVegan;