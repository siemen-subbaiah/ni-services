import React, { useState } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import ReCAPTCHA from "react-google-recaptcha"
const FORMSPARK_ACTION_URL = "https://submit-form.com/1hfcXVfq"

const CovidForm = () => {
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
    <Form className="my-form" action={FORMSPARK_ACTION_URL} method="POST">
      <input
        type="hidden"
        name="_redirect"
        value="https://nischidhaimagingservices.com/thank-you1"
      />
      <input type="hidden" name="_email.template.title" value="Covid Form" />
      <input type="hidden" name="_email.template.footer" value="false" />
      <Row>
        <Col lg={6} md={12}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your age"
              required
              name="age"
            />

            <Form.Group as={Col}>
              <Form.Label as="legend" column sm={1}>
                Sex
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="male"
                  name="sex"
                  id="formHorizontalRadios1"
                  inline
                  required
                />
                <Form.Check
                  type="radio"
                  label="female"
                  name="sex"
                  id="formHorizontalRadios2"
                  inline
                  required
                />
              </Col>
            </Form.Group>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>SRF Id</Form.Label>
            <Form.Control type="number" required name="SRF-ID" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>BU Number</Form.Label>
            <Form.Control type="number" required name="BU-Number" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="number"
              required
              name="Contact-number"
              placeholder="enter your number"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>
              Upload prescription (upload your google drive link)
            </Form.Label>
            <Form.Control
              type="url"
              required
              name="prescription"
              placeholder="paste the google drive link which has the prescription"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              required
              name="address"
            />
          </Form.Group>
        </Col>
        <Col lg={6} md={12}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <h5 className="mt-2">Attenders details : </h5>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              name="attenders-name"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Relationship with patient</Form.Label>
            <Form.Control type="text" required name="relationship" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="number"
              required
              name="attenders-contact-number"
              placeholder="enter your number"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              required
              name="attenders-address"
            />
          </Form.Group>
        </Col>
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
      </Row>
    </Form>
  )
}

export default CovidForm
