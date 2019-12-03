import React from 'react';
import { Card, Form, Button } from 'react-bootstrap'
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <h1 className="pageTitle">CONTACT PAGE</h1>

            <Card style={{ width: '100%', height: '100%'}}>
                <Card.Body>
                    <Card.Title>CONTACT ME</Card.Title>
                    <Form action="https://formsubmit.co/7cbc47e99e33a0e136a90ffebfe75f6e" method="POST">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Enter message here..." />
                        </Form.Group>

                        <Button type="submit">
                            Submit!
                        </Button>
                    </Form>

                </Card.Body>
            </Card>
        </div>
    );
}

export default Contact;