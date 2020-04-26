import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

import "./experience.css";

const Experience = (props) => {
  return (
    <div className="experience">
    <CardDeck>
      <Card style={{backgroundColor: "white", borderColor: "white"}}>
        <a href="https://www.lovethebrands.com" target="_blank">
            <CardImg className="image" top width="100%" src={require("./image/general/lovethebrands.svg")} alt="Card image cap" />
        </a>
        <CardBody>
          <CardTitle>QA Engineer </CardTitle>
          <CardSubtitle className="subtitle">Tasks</CardSubtitle>
          <CardText>Managing a team of two developers and their daily tasks, overviewing the functionality of the platform, and auditing the web-scraping code of over 150 different websites.</CardText>
        </CardBody>
      </Card>
      <Card style={{backgroundColor: "white", borderColor: "white"}}>
        <a href="https://www.meelogic.com/en/" target="_blank">
            <CardImg top width="100%" className="image" src={require("./image/general/meelogic.png")} alt="Card image cap" />
        </a>
        <CardBody>
          <CardTitle>PHP Development</CardTitle>
          <CardSubtitle className="subtitle">Tasks</CardSubtitle>
          <CardText>Contributing to the Development of the Intranet.</CardText>
        </CardBody>
      </Card>
      </CardDeck>
      <CardDeck>
      <Card style={{backgroundColor: "white", borderColor: "white"}}>
        <a href="https://www.edenblock.com" target="_blank">
            <CardImg top width="100%" className="image" src={require("./image/general/eden_block.png")} alt="Card image cap" />
         </a>
        <CardBody>
          <CardTitle>Head of Research</CardTitle>
          <CardSubtitle className="subtitle">Tasks</CardSubtitle>
          <CardText>Creating thematic and macro focused research reports for cryptoassets and blockchain technologies, collecting, synthesizing, and summarizing a wide range of content including articles, blog posts, and third-party research. </CardText>
        </CardBody>
      </Card>
      <Card style={{backgroundColor: "white", borderColor: "white"}}>
        <a href="https://www.nearprotocol.com" target="_blank">
            <CardImg top width="100%" className="image" src={require("./image/general/near.png")} alt="Card image cap" />
        </a>
        <CardBody>
          <CardTitle>Deverloper Advocate</CardTitle>
          <CardSubtitle className="subtitle">Tasks</CardSubtitle>
          <CardText>Bringing the tech closer to developers and users. This involves iterating on the documentation, writing user guides, and in general, making sure everyone has the tools and resources needed to get started.</CardText>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
  );
};

export default Experience;