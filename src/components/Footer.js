import { Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/images/logo.png"
import { SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si"
import { FaAddressCard, FaPhoneAlt } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
const Footer = () => {
  return (
    <footer className="bg-white p-3">
      <Container>
        <div className="main-footer">
          <Row>
            <Col xl={3} md={6}>
              <img src={logo} alt="logo" className="my-3" />
              <p>
                <FaAddressCard className="helper-icons" /> : 4086/10 1st B main
                B Block 2nd Stage Rajajinagar Bangalore-560021
              </p>
              <p>
                <FiMail className="helper-icons" /> :
                <span className="mail">nischidhaimagingservices@gmail.com</span>
              </p>
              <p>
                <FaPhoneAlt className="helper-icons" /> : +91-9844546546
              </p>
            </Col>
            <Col xl={3} md={6}>
              <div className="heading my-3">
                <h1 className="h5">Services</h1>
              </div>
              <ul>
                <li>
                  <Link to="/services/telepathology">Telepathology</Link>
                </li>
                <li>
                  <Link to="/services/teleradiology">Teleradiology</Link>
                </li>
                <li>
                  <Link to="/services/payment">Payment</Link>
                </li>
                <li>
                  <Link to="/services/second-opinion">Second-Opinion</Link>
                </li>
              </ul>
            </Col>
            <Col xl={3} md={6}>
              <div className="heading my-3">
                <h1 className="h5">About</h1>
              </div>
              <ul>
                <li>
                  <Link to="/about/directors">directors</Link>
                </li>
                <li>
                  <Link to="/about/join-our-team">Join our team</Link>
                </li>
                <li>
                  <Link to="/about/mission">Mission</Link>
                </li>
                <li>
                  <Link to="/about/team">Team</Link>
                </li>
              </ul>
            </Col>
            <Col xl={3} md={6}>
              <div className="heading my-3">
                <h1 className="h5">Support</h1>
              </div>
              <ul>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className="end-footer mt-5">
          <Row>
            <Col xl={6} md={12} className="text-center text-md-start">
              <p>
                &copy; {new Date().getFullYear()} Nischidha Imaging Services.
                All Rights Reserved.
              </p>
            </Col>
            <Col xl={6} md={12} className="text-lg-end text-center">
              <a
                href="https://www.facebook.com/nispl.in/"
                aria-label="facebook"
              >
                <SiFacebook className="social-links" />
              </a>
              <a href="https://twitter.com/Nischidha_ispl" aria-label="twitter">
                <SiLinkedin className="social-links" />
              </a>
              <a
                href="https://www.linkedin.com/company/nischidha-imaging-services-private-limited/"
                aria-label="linkedin"
              >
                <SiTwitter className="social-links" />
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
