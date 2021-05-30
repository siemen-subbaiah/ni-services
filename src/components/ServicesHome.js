import { Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaMicroscope } from "react-icons/fa"
import { GiMicroscopeLens } from "react-icons/gi"
import { MdPeopleOutline } from "react-icons/md"
import { FiPrinter } from "react-icons/fi"

const ServicesHome = () => {
  return (
    <section className="servies">
      <Container>
        <h1 className="text-center h3">Our Services</h1>
        <div className="underline"></div>
        <Row className="justify-content-center align-items-center">
          <Col lg={4} md={12}>
            <div className="service-h-card text-center">
              <GiMicroscopeLens className="service-icon mb-3" />
              <h4>Teleradiology</h4>
              <Link to="/services">
                <button className="btn btn-outline-info my-2">Read More</button>
              </Link>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className="service-h-card text-center">
              <FaMicroscope className="service-icon mb-3" />
              <h4>Telepathology </h4>
              <Link to="/services">
                <button className="btn btn-outline-info my-2">Read More</button>
              </Link>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className="service-h-card text-center">
              <FiPrinter className="service-icon mb-3" />
              <h4>3D Printing</h4>
              <Link to="/services">
                <button className="btn btn-outline-info my-2">Read More</button>
              </Link>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className="service-h-card text-center">
              <MdPeopleOutline className="service-icon mb-3" />
              <h4>Second opinion</h4>
              <Link to="/services">
                <button className="btn btn-outline-info my-2">Read More</button>
              </Link>
            </div>
          </Col>
        </Row>
        <Link
          to="/services"
          className="d-flex justify-content-center align-items-center my-4 text-decoration-none"
        >
          <button className="btn hero-btn btn-lg text-white">
            Explore More Services
          </button>
        </Link>
      </Container>
    </section>
  )
}

export default ServicesHome
