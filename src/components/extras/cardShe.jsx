import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';


const CardShe = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>She256</CardHeader>
        <CardBody>
          <Button href="https://she256.org/" style={{color: "white", backgroundColor: "#6b0000", borderColor: "white"}}>Website</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardShe;