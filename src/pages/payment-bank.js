import React from "react"
import { Col, Container, Form, Row, Button } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import bankImg from "../assets/images/bank-transfer.png"

const bankPayment = () => {
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
              <strong>Bank name : </strong>
              HDFC Bank
            </p>
            <p>
              <strong>Branch name : </strong>
              Indiranagar CMH road, Bangalore
            </p>
          </Col>
          <Col lg={6} md={12}>
            <Form className="my-form" method="POST">
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
                  name="number"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Service Availed</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mention the service availed"
                  required
                  name="service"
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
              <div className="d-grid gap-2">
                <Button className="hero-btn my-2" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default bankPayment
