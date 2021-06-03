import React, { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import ReCAPTCHA from "react-google-recaptcha"
const FORMSPARK_ACTION_URL = "https://submit-form.com/2QUL7r1d"

const CommercialForm = () => {
  const [form, setForm] = useState("")
  const handleToken = token => {
    setForm(currentForm => {
      return { ...currentForm, token }
    })
  }

  const handleExpire = () => {
    setForm(currentForm => {
      return { ...currentForm, token: null }
    })
  }

  return (
    <Container>
      <Form
        className="my-form mb-5"
        action={FORMSPARK_ACTION_URL}
        method="POST"
      >
        <input
          type="hidden"
          name="_redirect"
          value="https://nischidhaimagingservices.com/thank-you2"
        />
        <input
          type="hidden"
          name="_email.template.title"
          value="Research Form"
        />
        <input type="hidden" name="_email.template.footer" value="false" />
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
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Position"
            required
            name="position"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Company/ Institution/ Hospital</Form.Label>
          <Form.Control type="text" required name="more-info" />
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
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={7} required name="message" />
        </Form.Group>
        <div className="g-recaptcha my-3">
          <ReCAPTCHA
            sitekey="6LelwgsbAAAAABnPca5i0OkuvByGedUq4Tr1M9CF"
            onChange={handleToken}
            onExpired={handleExpire}
          />
        </div>
        <div className="d-grid gap-2">
          <Button className="hero-btn my-2" type="submit" aria-required>
            submit
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default CommercialForm
