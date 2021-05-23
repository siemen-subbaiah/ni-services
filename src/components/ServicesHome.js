import { Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaMicroscope } from "react-icons/fa"
import { GiMicroscopeLens, GiArchiveResearch } from "react-icons/gi"
import { AiOutlineThunderbolt } from "react-icons/ai"
import { MdPeopleOutline } from "react-icons/md"
import { FiPrinter } from "react-icons/fi"

const ServicesHome = () => {
  return (
    <section className="servies">
      <Container>
        <h3 className="text-center">Our Services and research</h3>
        <div className="underline"></div>
        <Row>
          <Col lg={4} md={12}>
            <div className="service-h-card d-flex justify-content-around align-items-center">
              <GiMicroscopeLens className="service-icon" />
              <h5>Teleradiology</h5>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className="service-h-card d-flex justify-content-around align-items-center">
              <FaMicroscope className="service-icon" />
              <h5>Telepathology </h5>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className="service-h-card d-flex justify-content-around align-items-center">
              <FiPrinter className="service-icon" />
              <h5>3D Printing</h5>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className="service-h-card d-flex justify-content-around align-items-center">
              <AiOutlineThunderbolt className="service-icon" />
              <h5>Deep Learning</h5>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className="service-h-card d-flex justify-content-around align-items-center">
              <GiArchiveResearch className="service-icon" />
              <h5>Scientific Research</h5>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className="service-h-card d-flex justify-content-around align-items-center">
              <MdPeopleOutline className="service-icon" />
              <h5>Second opinion</h5>
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
