import { Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { data } from "../constants/AboutConstants"

const AboutMain = () => {
  return (
    <Container className="my-3 about-main">
      <Row>
        {data.map(service => {
          return (
            <Col lg={6} md={6} xl={3} key={service.id} className="my-3">
              <div className="service-h-card">
                {service.image}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link}>
                  <button className="btn text-white hero-btn">Read More</button>
                </Link>
              </div>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default AboutMain
