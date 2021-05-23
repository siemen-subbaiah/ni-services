import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Container, Row, Button } from "react-bootstrap"

const PersonalTax = () => {
  return (
    <Container>
      <h1 className="text-center my-3">Personal Tax Returns</h1>
      <div className="underline"></div>
      <Row className="my-5">
        <Col lg={6} md={12} className="order-2 order-lg-1">
          <h6 className="my-3 my-lg-0">
            Maximum Refund, 100% Accurate & 100% Guaranteed.
          </h6>
          <h6>In addition, we offer CRA representation.</h6>
          <p>We specialize in almost all the categories of Tax Returns:</p>
          <ul>
            <li>Self-Employed, Sole Proprietorship, Partnership</li>
            <li>Seniors on Canadian or Foreign Pensions</li>
            <li>Salaried and commission employees with deductible expenses</li>
            <li>New immigrants, refugees, emigrants and non-residents</li>
            <li>Rental Income, Capital Gains and various investment incomes</li>
            <li>Tips, babysitting, odd jobs and other related incomes</li>
            <li>Clergy with residential deductions</li>
            <li>Foreign Income</li>
            <li>Non Resident Rental Income</li>
            <li>
              Social assistance, Disability and other Government assistance
              programs etc.
            </li>
            <li>Returns for deceased persons</li>
            <li>Single, married, separated, divorced or widowed</li>
            <li>T3-Trust Return Preparation</li>
            <li>Canadian Citizens Overseas</li>
          </ul>
        </Col>
        <Col lg={6} md={12} className="order-1 order-lg-2">
          <StaticImage
            src="../assets/images/ptr.jpg"
            placeholder="tracedSVG"
            layout="fullWidth"
            alt="Personal-tax-returns-img"
          />
        </Col>
      </Row>
      <div className="additonal-info">
        <p>
          We assist our clients worldwide with their tax preparation needs. We
          provide assistance by phone, fax or email for your convenience.
          Whether you were/are outside of Canada temporarily or you are leaving
          Canada permanently, we can assist you with your tax preparation needs
          to finalize and submit your return and prevent double taxation.{" "}
        </p>
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

export default PersonalTax
