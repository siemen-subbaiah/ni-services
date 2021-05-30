import React, { useState } from "react"
import { Col, Container, Form, Row, Button } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import bankImg from "../assets/images/bank-transfer.png"
import ReCAPTCHA from "react-google-recaptcha"
// import emailjs from "emailjs-com"
// import { navigate } from "gatsby"
const FORMSPARK_ACTION_URL = "https://submit-form.com/aG8nTrbX"

const BankPayment = () => {
  const [form, setForm] = useState("")
  // const [loading, setLoading] = useState(false)
  // const handleEmail = e => {
  //   e.preventDefault()
  //   setLoading(true)
  //   emailjs
  //     .sendForm(
  //       "service_x5agap3",
  //       "template_8upsmbs",
  //       e.target,
  //       "user_2ycGHDtiEG2OA8KCMYXOt"
  //     )
  //     .then(
  //       result => {
  //         console.log(result.text)
  //         navigate("/thank-you3")
  //         setLoading(false)
  //       },
  //       error => {
  //         console.log(error.text)
  //       }
  //     )
  //   e.target.reset()
  // }

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
      <Seo Sitetitle="Payment-Bank" />
      <h2 className="mt-4 text-center">Bank Transfer</h2>
      <div className="underline"></div>
      <Container>
        <Row className="justify-content-center align-items-center my-5">
          <Col lg={6} md={12}>
            <img src={bankImg} alt="bank-img" />
            <h4 className="my-4">Please make your payment to:</h4>
            <p>
              <strong>Account name : </strong>
              Nischidha Imaging Services Pvt Ltd
            </p>
            <p>
              <strong>Account no : </strong>
              50200028932540
            </p>
            <p>
              <strong>IFSC no : </strong>
              HDFC0000184
            </p>
            <p>
              <strong>Swift code : </strong>
              HDFCINBBBNG
            </p>
            <p>
              <strong>Bank name : </strong>
              HDFC Bank
            </p>
            <p>
              <strong>Branch name : </strong>
              Indiranagar CMH road, Bangalore
            </p>
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
                value="https://epic-meninsky-607a02.netlify.app/thank-you3"
              />
              <input
                type="hidden"
                name="_email.template.title"
                value="Paytm Payment"
              />
              <input
                type="hidden"
                name="_email.template.footer"
                value="false"
              />
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
                  name="contact-number"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Service Availed</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mention the service availed"
                  required
                  name="service availed"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" required name="amount" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <p>After successful payment, please enter the Reference ID:</p>
                <Form.Label>Reference ID</Form.Label>
                <Form.Control type="number" required name="reference-id" />
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
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default BankPayment
