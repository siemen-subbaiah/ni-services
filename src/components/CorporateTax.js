import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"

const CorporateTax = () => {
  return (
    <Container>
      <h1 className="text-center my-3">Corporate Tax (T2)</h1>
      <div className="underline"></div>
      <Row className="my-5 justify-content-center align-items-center">
        <Col lg={6} md={12} className="order-2 order-lg-1">
          <h6 className="my-3">
            For a typical owner-managed Canadian corporation, our services
            include:
          </h6>
          <ul>
            <li>Preparation of financial statements</li>
            <li>
              Filing of corporate federal T2 Tax return including the
              attachments
            </li>
            <li>Filing of a provincial tax return including the attachments</li>
            <li>Income tax planning for optimal distribution of income.</li>
            <li>
              Preparation of associated T4 /T4A, T5, ROE for your business
            </li>
            <li>Filing associated GST/HST, PST return</li>
            <li>Coordination with individual filings</li>
          </ul>
        </Col>
        <Col lg={6} md={12} className="order-1 order-lg-2">
          <StaticImage
            src="../assets/images/ct.jpg"
            placeholder="tracedSVG"
            layout="constrained"
            alt="Personal-tax-returns-img"
            height="450"
          />
        </Col>
      </Row>
      <div className="additonal-info">
        <p>We also help you with: </p>
        <ul>
          <li> Business Registration and planning services.</li>
          <li>Incorporate your business.</li>
        </ul>
        <p>
          We provide NUANS report service. Federal and Provincial Incorporation,
          Provincial name registration, CRA business number, CRA GST/HST &
          Payroll, WSIB
        </p>
        <ul>
          <li>
            Attaining or canceling your Business Number and all relevant
            accounts
          </li>
          <li>Closing up your business</li>
        </ul>
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

export default CorporateTax
