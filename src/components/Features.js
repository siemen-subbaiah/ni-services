import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Features = () => {
  return (
    <div className="features my-5">
      <Container fluid>
        <Row>
          <Col lg={4} className="feature-1">
            <h2>ENSURE SECURITY</h2>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              similique tempora minus sint fuga tempore quisquam dicta.
              Necessitatibus magni quam ipsum omnis? Delectus autem pariatur
              esse voluptates aperiam accusamus mollitia?
            </p>
          </Col>
          <Col lg={4} className="feature-2">
            <h2>EXPERT TEAM</h2>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              similique tempora minus sint fuga tempore quisquam dicta.
              Necessitatibus magni quam ipsum omnis? Delectus autem pariatur
              esse voluptates aperiam accusamus mollitia?
            </p>
          </Col>
          <Col lg={4} className="feature-1">
            <h2>24/7 SUPPORT</h2>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              similique tempora minus sint fuga tempore quisquam dicta.
              Necessitatibus magni quam ipsum omnis? Delectus autem pariatur
              esse voluptates aperiam accusamus mollitia?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Features
