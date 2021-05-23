import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { Accordion, Card, Col, Container, Row } from "react-bootstrap"
import { RiArrowDropRightLine } from "react-icons/ri"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

const Body = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    console.log("hello!")
    setToggle(!toggle)
  }

  return (
    <section className="info-section my-3 my-lg-5">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={6}>
            <h5 className="info-one-heading">OUR VISION</h5>
            <h4 className="info-heading">
              is to provide best quality telemedicine services including{" "}
              <span className="color">teleradiology</span> and
              <span className="color"> telepathology</span>
            </h4>
            <Accordion defaultActiveKey="0" className="my-4">
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className="d-flex align-items-center justify-content-between"
                  onClick={handleToggle}
                >
                  <h5>How will I receive my reports?</h5>

                  {toggle ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p>
                      You can access your reports via a secure login to our PACS
                      which is provided by Teleradiology Providers. Our reports
                      have special software to provide key images on the report
                      and aid the referring physician’s understanding of the
                      process.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="1"
                  className="d-flex align-items-center justify-content-between"
                  onClick={handleToggle}
                >
                  <h5>What coverage hours are offered?</h5>
                  {toggle ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p>We offer 24x7 coverage every day of the year.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="2"
                  className="d-flex align-items-center justify-content-between"
                  onClick={handleToggle}
                >
                  <h5>Who will read our studies?</h5>
                  {toggle ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p>
                      All studies are read by one or more of our consultant
                      radiologists. In addition, subspecialists will read
                      studies according to their area of expertise.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Link to="/faq">
                <button className="btn hero-btn text-white my-2">
                  More FAQ <RiArrowDropRightLine />{" "}
                </button>
              </Link>
            </Accordion>
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
