import React from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { FaAddressCard, FaPhoneAlt } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const FormContact = ({ heading, para }) => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col md={12} lg={6} className="text-lg-start">
          <h1>{heading}</h1>
          <p>{para}</p>
          <p>
            <FaAddressCard className="helper-icons" /> 4086/10, 1st B main, B
            Block, 2nd Stage Rajajinagar, Bangalore-560021
          </p>
          <p>
            <FaPhoneAlt className="helper-icons" /> +91-9844546546
          </p>
          <p>
            <FiMail className="helper-icons" />
            <span className="mail"> nischidhaimagingservices@gmail.com</span>
          </p>
        </Col>
        <Col md={12} lg={6}>
          <Form className="my-form" method="POST">
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
