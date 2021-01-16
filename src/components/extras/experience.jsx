import React from 'react';
import { Card, CardGroup, CardHeader, CardBody, CardText, CardImg } from 'reactstrap';

import "./experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <CardGroup>
      <Card>
       <a href="https://www.meelogic.com/en/" target="_blank" rel="noopener noreferrer"><CardImg top width="100%" src={require("./image/general/meelogic.png")} alt="meelogic-logo"
        style={{ height: '70px', width: '200px', margin: 'auto auto', padding: '5px' }}/></a>
        <CardHeader style={{ color: '#6b0000', fontWeight: 'bold' }}>Software Engineering Internship</CardHeader>
        <CardBody className="card-body-about">
          <CardText style={{ color: '#131619' }}>
            Contributing to the Intranet written in php, including the development and testing of new features
          </CardText>
        </CardBody>
      </Card>
      <div className="cardDivider"/>
      <Card>
        <a href="https://www.near.org" target="_blank" rel="noopener noreferrer"><CardImg top width="100%" src={require("./image/general/near.png")} alt="near-logo"
        style={{ height: '70px', width: '200px', margin: 'auto auto'}} /></a>
        <CardHeader style={{ color: '#6b0000', fontWeight: 'bold' }}>Developer Advocate</CardHeader>
        <CardBody className="card-body-about">
          <CardText style={{ color: '#131619' }}>
            Developing the community strategy, including the creation of community programs, community initiatives, such as events, and blockchain education
          </CardText>
        </CardBody>
      </Card>
      <div className="cardDivider"/>
      <Card>
        <a href="https://www.codefresh.io" target="_blank" rel="noopener noreferrer"><CardImg top height="80%" width="80%" src={require("./image/general/codefresh.png")} alt="codefresh-logo"
        style={{ height: '70px', width: '90px', margin: 'auto auto', padding: '5px'}} /></a>
        <CardHeader style={{ color: '#6b0000', fontWeight: 'bold' }}>Developer Evangelist</CardHeader>
        <CardBody className="card-body-about">
          <CardText style={{ color: '#131619' }}>
            Contributing to the blog content, documentation, giving workshops and working on product-awareness
          </CardText>
        </CardBody>
      </Card>
      </CardGroup>

        <div className="linkedIn">
              <a href="https://www.linkedin.com/in/urlichsanais/" target="_blank" rel="noopener noreferrer">
                <div className="buttonTouch">
                  <h5>LinkedIn</h5>
                </div>
              </a>
            </div>
        
    </div>
  );
};

export default Experience;