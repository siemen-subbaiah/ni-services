import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"

const thankYou = () => {
  return (
    <Layout>
      <Seo Sitetitle="Thank you" />
      <Container className="mt-5 text-center">
        <Row className="justify-content-center align-items-center">
          <Col
            lg={6}
            md={12}
            className="text-center text-lg-start mt-lg-0 mt-5"
          >
            <h1>Thank you for paying!</h1>
            <p className="hero-ill-p">
              We will get back to you as soon as possible
            </p>
            <Link to="/">
              <button className="btn mb-3 hero-btn text-white">Home</button>
            </Link>
          </Col>
          <Col lg={6} md={12}>
            <StaticImage
              src="../assets/images/thank-you.svg"
              alt="thank-you"
              className="hero-ill"
              placeholder="tracedSVG"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default thankYou
