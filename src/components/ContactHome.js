import { Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const ContactHome = () => {
  return (
    <div className="contact-home p-3">
      <Container>
        <Row className="text-center my-grid text-white">
          <Col lg={12}>
            <h1>Reach out now</h1>
            <h3>to avail our services</h3>
            <Link to="/contact">
              <button className="btn hero-btn btn-lg">Contact us</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactHome
