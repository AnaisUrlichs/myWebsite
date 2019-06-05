import React, { Component } from "react";
import { Progress } from 'reactstrap';
import { ProgressBar } from "react-bootstrap";

export default class About extends Component {
    render() {
        return (
            <div class="progressBar">
                <h5>Skills</h5>
                <h3>Looking for some Skills? Below!</h3>

                <ProgressBar>
                <Progress value="75">75%</Progress>
                </ProgressBar>
            </div>
        );
    }
}
