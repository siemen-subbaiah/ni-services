import React from "react"
import { Container, Form, Button } from "react-bootstrap"

const ResearchForm = () => {
  return (
    <Container>
      <Form className="my-form mb-5" method="POST">
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
          <Form.Label>Education</Form.Label>
          <Form.Control
            type="text"
            placeholder="Education"
            required
            name="education"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Current Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your location"
            required
            name="location"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email ID</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email id"
            required
            name="email"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Mobile no</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your mobile number"
            required
            name="number"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Statement of Purpose</Form.Label>
          <Form.Control as="textarea" rows={7} required name="purpose" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button className="hero-btn my-2" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default ResearchForm
