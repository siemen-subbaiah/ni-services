import React, { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { FaAddressCard, FaPhoneAlt } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import ReCAPTCHA from "react-google-recaptcha"

const FORMSPARK_ACTION_URL = "https://submit-form.com/FjhXcw2p"

const FormContact = ({ heading, para }) => {
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
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col md={12} lg={6} className="text-lg-start">
          <h1>{heading}</h1>
          <p>{para}</p>
          <p>
            <FaAddressCard className="helper-icons" /> : 4086/10, 1st B main, B
            Block, 2nd Stage Rajajinagar, Bangalore-560021
          </p>
          <p>
            <FaPhoneAlt className="helper-icons" /> : +91-9844546546
          </p>
          <p>
            <FiMail className="helper-icons" /> :
            <span className="mail"> nischidhaimagingservices@gmail.com</span>
          </p>
        </Col>
        <Col md={12} lg={6}>
          <Form className="my-form" method="POST" action={FORMSPARK_ACTION_URL}>
            <input
              type="hidden"
              name="_redirect"
              value="https://nischidhaimagingservices.com/thank-you1"
            />
            <input
              type="hidden"
              name="_email.template.title"
              value="Contact Form"
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
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your number"
                required
                name="number"
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
            {/* <div
              className="g-recaptcha"
              // data-size="compact"
              data-sitekey="6LfSnf8aAAAAAC7iwS1lFfiXn5Uj2L_JZfhm9VMY"
            ></div> */}
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
        </Col>
      </Row>
    </Container>
  )
}

export default FormContact
