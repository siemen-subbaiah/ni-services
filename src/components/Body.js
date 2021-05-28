import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Accordion, Card, Col, Container, Row } from "react-bootstrap"
import { RiArrowDropRightLine } from "react-icons/ri"
import { IoMdArrowDropdown } from "react-icons/io"
import { data } from "../constants/FaqHome"

const Body = () => {
  return (
    <section className="info-section my-3 my-lg-5">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={6}>
            <h5 className="info-one-heading text-center text-lg-start">
              OUR VISION
            </h5>
            <h4 className="info-heading">
              is to provide best quality telemedicine services including{" "}
              <span className="color">teleradiology</span> and
              <span className="color"> telepathology</span>
            </h4>
            <div className="service-h-card">
              <p>
                Dedicated healthcare facility by providing Intensive Care Unit
                (ICU) in treatment and management of moderate to severe COVID
                pneumonia in Bengaluru (Rural & Urban). Shall provide 24x7
                supervised ICU care in collaboration with multiple small
                hospitals.
              </p>
            </div>
            <Link
              to="/covid"
              className="d-flex justify-content-center d-lg-block"
            >
              <button className="btn hero-btn text-white my-2 body-btn">
                Read More <RiArrowDropRightLine />
              </button>
            </Link>
          </Col>
          <Col lg={6}>
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/target.svg"
              layout="constrained"
              alt="finance-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Body
