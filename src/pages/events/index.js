import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import BackgroundImage from "../../components/BackgroundImage"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TranquilDoc from "../../assets/images/TranquilDoc.jpg"
import TranquilDoc8 from "../../assets/images/TranquilDoc-8.jpg"
import TranquilDoc10 from "../../assets/images/TranquilDoc-10.jpeg"
import { Link } from "gatsby"

const events = () => {
  return (
    <Layout>
      <Seo Sitetitle="Events" />
      <BackgroundImage title="Events" description="" />
      <Container>
        <Row>
          <Col lg={12} className="order-1 order-lg-2">
            <div className="more-info my-5 text-center" id="payment">
              <Row>
                <Col lg={6} md={12}>
                  <div className="service-h-card">
                    <img
                      src={TranquilDoc10}
                      alt="TranquilDoc10-img"
                      className="img-fluid tran"
                    />
                    <h4 className="my-4">Tranquildoc-10: Reigning</h4>
                    <Link to="/events/TranquilDoc-10">
                      <button className="btn text-white hero-btn">
                        Read More
                      </button>
                    </Link>
                  </div>
                </Col>
                {/* <Col lg={4} md={12}>
                  <div className="service-h-card">
                    <img
                      src={TranquilDoc}
                      alt="TranquilDoc8-img"
                      className="img-fluid tran"
                    />
                    <h4>TranquilDoc-9</h4>
                    <Link to="/events/TranquilDoc-9">
                      <button className="btn text-white hero-btn">
                        Read More
                      </button>
                    </Link>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="service-h-card">
                    <img src={TranquilDoc8} alt="TranquilDoc8-img" />
                    <h4>TranquilDoc-8</h4>
                    <a
                      href="https://www.facebook.com/events/1066599086844546/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn text-white hero-btn">
                        Read More
                      </button>
                    </a>
                  </div>
                </Col> */}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default events
