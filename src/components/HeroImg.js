import React from "react"
import { Col, Row } from "react-bootstrap"

const HeroImg = ({ title, description, path, id }) => {
  return (
    <Row className="justify-content-center align-items-center">
      <Col lg={6} md={12} className="text-center text-lg-start mt-lg-0 mt-5">
        <h1>{title}</h1>
        <p className="hero-ill-p">{description}</p>
        <a href={id} className="btn hero-btn text-white">
          Read More
        </a>
      </Col>
      <Col lg={6} md={12}>
        <img src={path} alt={title} className="hero-ill" />
      </Col>
    </Row>
  )
}

export default HeroImg
