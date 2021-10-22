import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Col, Container, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import CommercialForm from "../../components/CommercialForm"

const secondOpinion = () => {
  return (
    <Layout>
      <Seo Sitetitle="Second-Opinion" />
      <Container>
        <h1 className="text-center mt-5">Second Opinion</h1>
        <div className="underline"></div>
        <div className="more-info my-5" id="secondopinion">
          <Row className="justify-content-center align-items-center">
            <Col lg={6} md={12} className="order-2 order-lg-1">
              <p>
                We provide second opinion from our experienced team and
                interpret your images and provide you detailed reports.
                Individuals can have as many follow up questions based on their
                reports. Our second opinion service is helpful for individuals
                who wish to have another expert opinion on his or her diagnostic
                study. It offer a second level of assurance for medical
                practitioners as well as the patients taking them to complete
                satisfaction.
              </p>
            </Col>
            <Col lg={6} md={12} className="order-1 order-lg-2">
              <StaticImage
                src="../../assets/images/second-opinion.jpg"
                placeholder="tracedSVG"
                alt="secondopinion"
                className="my-3 my-lg-5"
                layout="constrained"
              />
            </Col>
          </Row>
        </div>
        <CommercialForm />
      </Container>
    </Layout>
  )
}

export default secondOpinion
