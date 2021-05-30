import React, { useState } from "react"
import { Container, Col, Row, Form, Button } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import qrCode from "../assets/images/qr-code.jpg"
import gpay from "../assets/images/g-pay.png"
import paytm from "../assets/images/paytmupi.png"
import phonepay from "../assets/images/phonepay.png"
import ReCAPTCHA from "react-google-recaptcha"

const FORMSPARK_ACTION_URL = "https://submit-form.com/5ludYxuU"

const CovidFunds = () => {
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
      <Seo Sitetitle="Covid ICU-Fund raiser" />
      <Container className="covid-help">
        <h2 className="mt-4 text-center">COVID ICU fund raiser</h2>
        <div className="underline"></div>
        <p className="my-4 w-75 text-center mx-auto">
          Donation are accepted for supporting COVID ICU treatment. This is
          completely managed by “Nischidha Imaging Sevices Private Limited” and
          selfless doctors in and around Bengaluru.
        </p>
        <Row className="justify-content-center align-items-center">
          <Col lg={6} md={12} className="my-3">
            <img src={qrCode} alt="qr-code" className="qr-img" />
          </Col>
          <Col lg={6} md={12}>
            <div className="bank-det my-3">
              <p>
                {" "}
                <strong>Bank details : </strong>Account name: Nischidha Imaging
                Services Pvt Ltd
              </p>
              <p>
                <strong> Account No : </strong>50200028932540
              </p>
              <p>
                <strong>IFSC : </strong>HDFC0000184
              </p>
              <p>
                <strong>Bank and Branch : </strong> HDFCBank, Indiranagar CMH
                road, Bangalore
              </p>
            </div>

            <p className="my-4">
              The QR Code can be scanned using any UPI supported apps or click
              on the preferred apps below to donate.
            </p>

            <div className="sup-apps d-flex justify-content-start align-items-center">
              <a href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Thank you for choosing to raise funds for covid ICU&cu=INR">
                <img src={gpay} alt="gpay-logo" />
              </a>
              <a href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Thank you for choosing to raise funds for covid ICU&cu=INR">
                <img src={phonepay} alt="phonepay-logo" />
              </a>
              <a href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Thank you for choosing to raise funds for covid ICU&cu=INR">
                <img src={paytm} alt="paytm-logo" />
              </a>
            </div>
            <div className="details">
              <p>UPI NAME : Dhananjaya K V N</p>
              <p className="upi-id">UPI ID: dhananjayakvn@okhdfcbank</p>
            </div>
          </Col>
        </Row>
        <Form className="my-form" method="POST" action={FORMSPARK_ACTION_URL}>
          <input
            type="hidden"
            name="_redirect"
            value="https://epic-meninsky-607a02.netlify.app/thank-you3"
          />
          <input
            type="hidden"
            name="_email.template.title"
            value="Bank Transfer"
          />
          <input type="hidden" name="_email.template.footer" value="false" />
          <Form.Group controlId="exampleForm.ControlInput1">
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
            <Form.Control type="number" required name="amount" />
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
              sitekey="6LfSnf8aAAAAAC7iwS1lFfiXn5Uj2L_JZfhm9VMY"
              onChange={handleToken}
              onExpired={handleExpire}
            />
          </div>
          <div className="d-grid gap-2">
            {form && (
              <Button className="hero-btn my-2" type="submit" aria-required>
                submit
              </Button>
            )}
          </div>
        </Form>
      </Container>
    </Layout>
  )
}

export default CovidFunds
