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
            <div className="my-5">
              <h5 className="info-one-heading text-center text-lg-start">
                OUR VISION
              </h5>
              <h4 className="info-heading">
                is to provide best quality telemedicine services including{" "}
                <span className="color">teleradiology</span> and
                <span className="color"> telepathology</span>
              </h4>
            </div>
            <h5 className="info-one-heading text-center text-lg-start">
              COVID HELP
            </h5>
            <p className="info-heading">
              Dedicated healthcare facility by providing Intensive Care Unit
              <span className="color">(ICU)</span> in treatment and management
              of moderate to severe COVID pneumonia in Bengaluru (Rural & Urban)
              {
                <Link to="/covid">
                  {" "}
                  <span className="color">read more...</span>
                </Link>
              }
            </p>
            <div className="btns d-flex align-items-center justify-content-center justify-content-lg-start my-3">
              <Link
                to="/covid-form"
                className="d-flex justify-content-center d-lg-block"
              >
                <button className="btn hero-btn text-white my-2 body-btn">
                  Apply Now <RiArrowDropRightLine />
                </button>
              </Link>
              <Link
                to="/covid-funds"
                className="d-flex justify-content-center d-lg-block"
              >
                <button className="btn btn-success text-white my-2 body-btn">
                  Donate Now <RiArrowDropRightLine />
                </button>
              </Link>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/covid.svg"
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
