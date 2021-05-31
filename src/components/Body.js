import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Body = () => {
  return (
    <section className="info-section my-3 my-lg-5">
      <Container>
        <Row className="justify-content-center align-items-center">
          <div className="my-2 my-lg-5">
            <h1 className="info-one-heading h5 fw-bold text-center">
              OUR VISION
            </h1>
            <p className="info-heading">
              Our company provides teleradiology services (i.e. CT, MRI, X-ray)
              to hospitals and diagnostic centres in remote parts of India and
              other parts of world. It is a health care company that uses
              technology for providing teleradiology services to consultants and
              patients. The reports generated are of international standard by
              qualified (as per MCI guidelines), skilled, devoted and hard
              working consultants in Radiodiagnosis. Second opinion can be
              obtained and also offering the weekends support, flexible
              scheduling and excellent reporting quality.
            </p>
          </div>
          <Col lg={6}>
            <h1 className="info-one-heading fw-bold h5 text-center text-lg-start">
              COVID SERVICES
            </h1>
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
                  Request Form
                </button>
              </Link>
              <Link
                to="/covid-funds"
                className="d-flex justify-content-center d-lg-block"
              >
                <button className="btn btn-success text-white my-2 body-btn">
                  Donate Now
                </button>
              </Link>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/covid.svg"
              layout="constrained"
              alt="covid-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Body
