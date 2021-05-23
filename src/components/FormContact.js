import React from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
const FORMSPARK_ACTION_URL = "https://submit-form.com/4AZ4C6c2"

const FormContact = ({ heading, para }) => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col md={12} lg={6} className="text-center text-lg-start">
          <h1>{heading}</h1>
          <p>{para}</p>
        </Col>
        <Col md={12} lg={6}>
          <Form className="my-form" method="POST" action={FORMSPARK_ACTION_URL}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
                name="name"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
                name="email"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={7} required name="message" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button className="hero-btn my-2" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default FormContact
