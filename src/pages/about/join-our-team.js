import React, { useState } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Container, Form, Button } from "react-bootstrap"
import ReCAPTCHA from "react-google-recaptcha"
const FORMSPARK_ACTION_URL = "https://submit-form.com/3JOdyWbJ"

const Join_our_team = () => {
  const [setForm] = useState("")

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
    <Layout>
      <Seo Sitetitle="Join our team" />
      <Container className="join-team">
        <h1 className="text-center mt-5">Join Our Team</h1>
        <div className="underline"></div>
        <h1 className="j1 text-center">Fill in the form</h1>
        <p className="h5 text-center">We will get back to you very soon</p>
        <Form
          className="my-form my-3"
          id="form-fill"
          method="POST"
          action={FORMSPARK_ACTION_URL}
        >
          <input
            type="hidden"
            name="_redirect"
            value="https://nischidhaimagingservices.com/thank-you2"
          />
          <input
            type="hidden"
            name="_email.template.title"
            value="Join Team Form"
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
            <Form.Label>Qualification</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Qualification"
              required
              name="qualification"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Speciality</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Speciality"
              required
              name="speciality"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your Contact number"
              required
              name="contact-number"
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
            <Form.Label>Biography</Form.Label>
            <Form.Control as="textarea" rows={7} required name="biography" />
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
    </Layout>
  )
}

export default Join_our_team
