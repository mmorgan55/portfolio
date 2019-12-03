import React from 'react';
import { Card, Form } from 'react-bootstrap'

const Contact = () => {
    return (
        <div>
            <h1>CONTACT PAGE</h1>

            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>CONTACT ME</Card.Title>

                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Enter name"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Enter message here..."/>
                    </Form.Group>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Contact;