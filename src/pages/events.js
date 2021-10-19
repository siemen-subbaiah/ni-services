import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import BackgroundImage from "../components/BackgroundImage"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TranquilDoc from "../assets/images/TranquilDoc.jpg"
import TranquilDoc8 from "../assets/images/TranquilDoc-8.jpg"
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
                      src={TranquilDoc}
                      alt="TranquilDoc-img"
                      width="150"
                      height="150"
                    />
                    <h4>TranquilDoc-9: Infatuation</h4>
                    <p className="text-start">
                      TranquilDoc is back after COVID19 pandemic. It's a series
                      of event for all the young hard working dynamic doctors.
                      Rejuvenate, Rejoice and reload.
                    </p>
                    <p className="text-start">
                      <strong>Venue :</strong> Angrezi- Bollywood bar and
                      Kitchen
                    </p>
                    <p className="text-start">
                      {" "}
                      <strong>Date :</strong> 06th November 2021
                    </p>
                    <p className="text-start">
                      {" "}
                      <strong>Time :</strong> 18:00 - 23:45 hrs.
                    </p>
                    <Link to="/event-details">
                      <button className="btn text-white hero-btn">
                        Register
                      </button>
                    </Link>
                  </div>
                </Col>
                <Col lg={6} md={12}>
                  <div className="service-h-card">
                    <img src={TranquilDoc8} alt="TranquilDoc8-img" />
                    <h4>TranquilDoc-8</h4>
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
