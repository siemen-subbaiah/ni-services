import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import BackgroundImage from "../components/BackgroundImage"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TranquilDoc from "../assets/images/TranquilDoc.jpg"
import TranquilDoc8 from "../assets/images/TranquilDoc-8.jpg"

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
                      src={TranquilDoc}
                      alt="TranquilDoc-img"
                      width="150"
                      height="150"
                    />
                    <h3>TranquilDoc-9</h3>
                    {/* <Link to="/payment-paytm"> */}
                    {/* <button className="btn text-white hero-btn">
                        Pay Now
                      </button> */}
                    {/* </Link> */}
                  </div>
                </Col>
                <Col lg={6} md={12}>
                  <div className="service-h-card">
                    <img src={TranquilDoc8} alt="TranquilDoc8-img" />
                    <h3>TranquilDoc-8</h3>
                    <a
                      href="https://www.facebook.com/events/1066599086844546/"
                      target="_blank"
                    >
                      <button className="btn text-white hero-btn">
                        Read More
                      </button>
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default events
