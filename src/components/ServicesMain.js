import { Link } from "gatsby"
import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { data } from "../constants/ServiceConstant"

const ServicesMain = () => {
  return (
    <Container className="my-3" fluid>
      <Row>
        <h1 className="text-center">
          Our <span className="green">Services</span>{" "}
        </h1>
        {data.map(service => {
          return (
            <Col lg={3} md={2} xl={3} key={service.id} className="my-3">
              <Card className="service-card">
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={service.title}
                />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Link to={service.link}>
                    <button className="btn text-white hero-btn">
                      Read More
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ServicesMain
