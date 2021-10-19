import React, { useState } from "react"
import { Col, Container, Form, Row, Button } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ReCAPTCHA from "react-google-recaptcha"
import paytmImg from "../assets/images/paytm.png"
import qrCode from "../assets/images/qr-code.jpg"
const FORMSPARK_ACTION_URL = "https://submit-form.com/rUSK5Dl0"

const PaymentEvent = () => {
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
    <Layout>
      <Seo Sitetitle="Payment-PayTM" />
      <h2 className="mt-4 text-center">Event Payment</h2>
      <div className="underline"></div>
      <Container>
        <Row className="justify-content-center align-items-center my-5">
          <Col lg={6} md={12}>
            {/* <img src={paytmImg} alt="paytm-img" /> */}
            <h4 className="my-4">
              Please make your payment by scanning the below QR code:
            </h4>
            <p>
              <strong>Mobile Number : </strong>
              9844546546
            </p>
            <img src={qrCode} alt="qr-code" className="qr-img" />
          </Col>
          <Col lg={6} md={12}>
            <Form
              className="my-form"
              method="POST"
              action={FORMSPARK_ACTION_URL}
            >
              <input
                type="hidden"
                name="_redirect"
                value="https://nischidhaimagingservices.com/thank-you3"
              />
              <input
                type="hidden"
                name="_email.template.title"
                value="Event Details"
              />
              <input
                type="hidden"
                name="_email.template.footer"
                value="false"
              />
              <Form.Group controlId="exampleForm.ControlInput1">
                <input
                  type="hidden"
                  name="reference_id"
                  value={localStorage.getItem("ref")}
                />
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  required
                  name="first-name"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  required
                  name="last-name"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your designation"
                  required
                  name="designation"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Profession/Branch</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Profession/Branch"
                  required
                  name="profession"
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
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Mobile no</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your mobile number"
                  required
                  name="contact number"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  required
                  name="amount"
                  maxLength="4"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <p>
                  After successful payment, please enter the transaction number:
                </p>
                <Form.Label>Transaction Number</Form.Label>
                <Form.Control type="number" required name="transaction-id" />
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
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default PaymentEvent
