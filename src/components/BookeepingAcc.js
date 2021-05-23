import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
// import ba from "../assets/images/ba.png"

const BookeepingAcc = () => {
  return (
    <Container>
      <h1 className="text-center my-3">Bookkeeping & Accounting Services</h1>
      <div className="underline"></div>
      <Row className="my-5 justify-content-center align-items-center">
        <Col lg={6} md={12} className="order-2 order-lg-1">
          <h6 className="my-3">
            We provide a wide range of services for your small business. We can
            expertly handle all of your accounting, bookkeeping and payroll
            needs. Whether you require our services weekly, monthly or annually.
          </h6>
          <ul>
            <li>Business start-up information and assistance</li>
            <li>Business Management Advice</li>
            <li>Business Development Assistance</li>
            <li>Management Accounting Assistance/Advice</li>
            <li>Accounts Payable & Receivable</li>
            <li>Payroll Services</li>
            <li>GST / HST; Year Ends; WSIB & Source Deductions Remittances</li>
            <li>Computerized Company Set Ups</li>
            <li>Financial Reporting; Bank Deposits; Bank Reconciliations</li>
            <li>Financial Accounting & Year End Services</li>
            <li>Financial Consulting</li>
            <li>Corporate Tax Preparation and Remittance</li>
            <li>Daily, Weekly, Monthly, Quarterly & Yearly Services</li>
            <li>Inventory </li>
          </ul>
        </Col>
        <Col lg={6} md={12} className="order-1 order-lg-2">
          <StaticImage
            src="../assets/images/ba.png"
            placeholder="tracedSVG"
            layout="constrained"
            alt="Personal-tax-returns-img"
            height="470"
          />
        </Col>
      </Row>
      <div className="additonal-info">
        {/* <p>
          We assist our clients worldwide with their tax preparation needs. We
          provide assistance by phone, fax or email for your convenience.
          Whether you were/are outside of Canada temporarily or you are leaving
          Canada permanently, we can assist you with your tax preparation needs
          to finalize and submit your return and prevent double taxation.{" "}
        </p> */}
      </div>
      <Link
        to="/services"
        className="d-flex justify-content-center align-items-center text-decoration-none"
      >
        <Button size="lg" className="hero-btn mb-3">
          Go Back
        </Button>
      </Link>
    </Container>
  )
}

export default BookeepingAcc
