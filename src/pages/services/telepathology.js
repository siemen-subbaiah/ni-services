import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import img from "../../assets/images/telepathology.svg"
import HeroImg from "../../components/HeroImg"
import { Col, Container, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const telepathology = () => {
  return (
    <Layout>
      <Seo Sitetitle="Telepathology" />
      <Container>
        <h1 className="text-center mt-5">Telepathology Services</h1>
        <div className="underline"></div>
        <div className="more-info my-5" id="telepathology">
          <Row className="justify-content-center align-items-center">
            <Col lg={6} md={12} className="order-2 order-lg-1">
              <p>
                Telepathology is the electronic transmission of computerized or
                digital images that can be utilized for diagnostic consultation.
                The system comprises of a microscope with a mounted digital
                camera linked to a computer. The pathologist selects the video
                images for analysis and then submits a diagnostic report.
              </p>
              <p>
                Nischidha imaging services pvt ltd., is a global Teleradiology
                and Telepathology service provider and we offer the most
                advanced and high quality online reporting services with faster
                turn – around time. Our services include 24X7 support from India
                to remote areas providing online interpretation of computerized
                or digital images to suit individual client’s needs.
              </p>
            </Col>
            <Col lg={6} md={12} className="order-1 order-lg-2">
              <StaticImage
                src="../../assets/images/telepath.jpg"
                placeholder="tracedSVG"
                alt="telepathology"
                className="my-3 my-lg-5"
                layout="constrained"
              />
            </Col>
          </Row>
          <p>
            Telepathology systems are divided into three major types: static
            image-based systems, real-time systems, and virtual slide systems.
            Static image systems have significant advantages of being the most
            sensibly valued and are usable in most settings; however the
            downside is that just the chosen subset of microscopic fields are
            transmitted for review by the pathologist. Real-time systems and
            virtual slides permit a specialist pathologist the chance to
            evaluate the entire specimen. With real-time systems, the specialist
            effectively works a microscope located at a distant site – changing
            focus, illumination, magnification, and field of view at will.
            Virtual slide systems use a robotized scanner that takes a visual
            image of the whole slide, which can then be sent to another area for
            diagnosis.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default telepathology
