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
            <h5 className="info-one-heading">OUR VISION</h5>
            <h4 className="info-heading">
              is to provide best quality telemedicine services including{" "}
              <span className="color">teleradiology</span> and
              <span className="color"> telepathology</span>
            </h4>

            <Accordion defaultActiveKey="0" className="my-4">
              {data.map(item => {
                return (
                  <Card key={item.id}>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={item.id}
                      className="d-flex align-items-center justify-content-between"
                    >
                      <h5>{item.question}</h5>
                      <IoMdArrowDropdown />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={item.id}>
                      <Card.Body>
                        <p>{item.ans}</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                )
              })}
              <Link to="/faq">
                <button className="btn hero-btn text-white my-2">
                  More FAQ <RiArrowDropRightLine />
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
