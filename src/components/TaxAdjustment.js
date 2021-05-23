import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"

const TaxAdjustmentComp = () => {
  return (
    <Container>
      <h1 className="text-center my-3">Tax Adjustment</h1>
      <div className="underline"></div>
      <Row className="my-5 justify-content-center align-items-center">
        <Col lg={6} md={12} className="order-2 order-lg-1">
          <p className="my-3">
            If you receive or found another income slip or deduction receipt
            simply bring it in to our office and we will file an adjustment for
            you. An adjustment could mean the difference between a higher than
            expected refund or reduction in the balance owing to the Canada
            Revenue Agency.
          </p>
          <p>
            It is imperative that any adjustment is made as soon as possible as
            the Canada Revenue Agency does not allow carry over of income slips
            from year to year, and there are strict deadlines on the use of
            certain deduction receipts.
          </p>
        </Col>
        <Col lg={6} md={12} className="order-1 order-lg-2">
          <StaticImage
            src="../assets/images/investment.jpg"
            placeholder="tracedSVG"
            layout="constrained"
            alt="Personal-tax-returns-img"
            height="480"
          />
        </Col>
      </Row>
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

export default TaxAdjustmentComp
