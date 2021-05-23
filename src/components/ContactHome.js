import { Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaAddressCard } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaFax } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const ContactHome = () => {
  return (
    <div className="contact-home p-3 bg-white">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={12} lg={6}>
            <h1>
              <span className="green">LDA</span>
            </h1>
            <p>Income Tax Bookkeeping Accounting & Financial Services </p>
            <div className="address">
              <p>
                <FaAddressCard className="green" /> : 164 Eglinton Avenue East
                Suite # 501 Toronto ON M4P 1G4
              </p>
              <p>
                {" "}
                <FaPhoneAlt className="green" /> : T (647) 340-3450
              </p>
              <p>
                <FaPhoneAlt className="green" /> : T (647) 980-6298
              </p>
              <p>
                {" "}
                <FaFax className="green" /> : (647) 340-4450
              </p>
              <p>
                {" "}
                <FiMail className="green" /> : Lda_incometax@yahoo.ca
              </p>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="operation">
              <h4>Hours of Operation:</h4>
              <p>Mon-Fri: 9 AM-6 PM (Season Only)</p>
              <p>Sat & Sun: 11-4 PM (Season Only)</p>
              <p>Mon-Fri: 11-4 PM (Off Season)</p>
              <p>Other Times: By appointment</p>
            </div>
            <Link to="/contact">
              <button className="btn hero-btn btn-lg text-white">
                Contact us
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactHome
