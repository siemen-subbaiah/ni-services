import React, { useState } from "react"
import { Col, Container, Form, Row, Button } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ReCAPTCHA from "react-google-recaptcha"
import gpay from "../assets/images/g-pay.png"
import paytm from "../assets/images/paytmupi.png"
import phonepay from "../assets/images/phonepay.png"
import qrCode from "../assets/images/qr-code2.jpg"

const FORMSPARK_ACTION_URL = "https://submit-form.com/rUSK5Dl0"

const PaymentEvent = () => {
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
      <Seo Sitetitle="Payment-PayTM" />
      <h2 className="mt-4 text-center">Event Payment</h2>
      <div className="underline"></div>
      <Container>
        <Row className="justify-content-center align-items-center my-5">
          <Col lg={6} md={12}>
            <p className="my-3">
              Registration Fees : 1180Rs (1000RS + GST 18%)
            </p>
            <div className="sup-apps d-flex justify-content-start align-items-center">
              <a
                href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Payment for TranquilDoc-9
 Event&cu=INR"
              >
                <img src={gpay} alt="gpay-logo" />
              </a>
              <a
                href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Payment for TranquilDoc-9
 Event&cu=INR"
              >
                <img src={phonepay} alt="phonepay-logo" />
              </a>
              <a
                href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Payment for TranquilDoc-9
 Event&cu=INR"
              >
                <img src={paytm} alt="paytm-logo" />
              </a>
            </div>
            <p>
              <strong>Mobile Number : </strong>
              9844546546
            </p>
            <p className="mb-4">
              The QR Code can be scanned using any UPI supported apps or click
              on the preferred apps above to donate.
            </p>
            <img src={qrCode} alt="qr-code" className="img-fluid qr-img2" />
          </Col>
          <Col lg={6} md={12}>
            <Form
              className="my-form my-3 my-lg-0"
              method="POST"
              action={FORMSPARK_ACTION_URL}
            >
              <input
                type="hidden"
                name="_redirect"
                value="https://nischidhaimagingservices.com/events/TranquilDoc-9"
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

              <input
                type="hidden"
                name="Name"
                value={
                  typeof window !== "undefined"
                    ? JSON.parse(localStorage.getItem("data"))?.name
                    : null
                }
              />
              <input
                type="hidden"
                name="Designation"
                value={
                  typeof window !== "undefined"
                    ? JSON.parse(localStorage.getItem("data"))?.designation
                    : null
                }
              />
              <input
                type="hidden"
                name="Profession"
                value={
                  typeof window !== "undefined"
                    ? JSON.parse(localStorage.getItem("data"))?.profession
                    : null
                }
              />
              <input
                type="hidden"
                name="Email"
                value={
                  typeof window !== "undefined"
                    ? JSON.parse(localStorage.getItem("data"))?.email
                    : null
                }
              />
              <input
                type="hidden"
                name="Number"
                value={
                  typeof window !== "undefined"
                    ? JSON.parse(localStorage.getItem("data"))?.number
                    : null
                }
              />
              <input
                type="hidden"
                name="reference_id"
                value={
                  typeof window !== "undefined"
                    ? JSON.parse(localStorage.getItem("data"))?.ref
                    : null
                }
              />
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
