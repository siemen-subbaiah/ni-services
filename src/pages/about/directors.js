import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import HeroImg from "../../components/HeroImg"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import img from "../../assets/images/directors.svg"
import { StaticImage } from "gatsby-plugin-image"
import { SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si"

const directors = () => {
  return (
    <Layout>
      <Seo Sitetitle="Board of Directors" />
      <Container className="directors">
        <HeroImg
          title="Board of Directors"
          description="Meet the board of directors who are taking the services to more further heights."
          path={img}
          id="#directors"
        />
        <div className="directors-info my-5" id="directors">
          <Row>
            <Col lg={6} md={12}>
              <div className="directors-card">
                <StaticImage
                  placeholder="tracedSVG"
                  layout="constrained"
                  alt="Dr Dhananjaya K V N"
                  src="../../assets/images/dhananjaya_k_v_n.jpg"
                  height={400}
                />
                <div className="directors-det">
                  <h1>Dr Dhananjaya K V N</h1>
                  <p>Managing Director</p>
                  <div className="directors-socials">
                    <a href="https://www.facebook.com/dhananjaya.kvn">
                      <SiFacebook className="social-icon-director" />
                    </a>
                    <a href="https://www.linkedin.com/in/">
                      <SiLinkedin className="social-icon-director" />
                    </a>
                    <a href="https://twitter.com/dhananjayakvn">
                      <SiTwitter className="social-icon-director" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="directors-card">
                <StaticImage
                  placeholder="tracedSVG"
                  layout="constrained"
                  alt="Dr Ranjana Rajendra"
                  src="../../assets/images/ranjana_rajendra.jpg"
                  height={400}
                />
                <div className="directors-det">
                  <h1>Dr Ranjana Rajendra</h1>
                  <p>Director</p>
                  <div className="directors-socials">
                    <a href="https://www.facebook.com/ranjana.rajendra.3">
                      <SiFacebook className="social-icon-director" />
                    </a>
                    <a href="https://www.linkedin.com/in/ranjana-rajendra-5414818a/">
                      <SiLinkedin className="social-icon-director" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  )
}

export default directors
