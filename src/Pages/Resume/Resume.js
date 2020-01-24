import React from 'react';
import "./Resume.css";
import { Accordion, Card, Button } from 'react-bootstrap';
import pdf from "./MatthewMorganResume.pdf";

const Resume = () => {
  return (
    <div className="Resume">
      <h1 id="Title">MATTHEW MORGAN RESUME</h1>

      <a id="ResumeDownload" href={pdf} download >Click here to download full Resume.</a>

      <Accordion id="ResumeAccordion">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Experience
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {/* TODO */}
              RSI Stuff Goes here.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Skills
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {/* TODO */}
              Skills description goes here.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Education
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              {/* TODO */}
              Education Information goes here.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Contact Information
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              {/* TODO */}
              Contact info goes here.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Resume;