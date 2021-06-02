import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import HeroImg from "../../components/HeroImg"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import img from "../../assets/images/teleradiology.svg"
import { StaticImage } from "gatsby-plugin-image"
import ResearchForm from "../../components/ResearchForm"
import CommercialForm from "../../components/CommercialForm"

const teleradiology = () => {
  return (
    <Layout>
      <Seo Sitetitle="Teleradiology" />
      <Container>
        <h1 className="text-center mt-5">Teleradiology Services</h1>
        <div className="underline"></div>
        <div className="more-info my-5" id="teleradiology">
          <Row className="justify-content-center align-items-center">
            <Col lg={6} md={12} className="order-2 order-lg-1">
              <p>
                We offer 24x7 teleradiology support across the following
                modalities: MRI, Computed Tomography (CT), Mammography, X-rays
                and Special Procedures.
              </p>
              <p>
                Our team’s expertise and excellent knowledge in radiology field
                strive to provide high quality report at the right time. There
                is a difference between routine reads and reading by people with
                subspecialist exposure. We have an excellent team of
                sub-specialists, who are experts in providing world-class round
                the clock sub-specialty reports. Our systems support all DICOM
                standards. This ensures quick and secure access to our services
                from any location across the world.
              </p>
            </Col>
            <Col lg={6} md={12} className="order-1 order-lg-2">
              <StaticImage
                src="../../assets/images/radiology.jpg"
                placeholder="tracedSVG"
                alt="teleradiology"
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

export default teleradiology
