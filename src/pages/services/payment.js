import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Col, Container, Row } from "react-bootstrap"
import paytmImg from "../../assets/images/paytm.png"
import bankImg from "../../assets/images/bank-transfer.png"
import { Link } from "gatsby"

const payment = () => {
  return (
    <Layout>
      <Seo Sitetitle="Payment" />
      <Container>
        <h1 className="text-center mt-5">Payment Options</h1>
        <div className="underline"></div>
        <Row>
          <Col lg={12} className="order-1 order-lg-2">
            <div className="more-info my-5 text-center" id="payment">
              <Row>
                <Col lg={6} md={12}>
                  <div className="service-h-card">
                    <img src={paytmImg} alt="paytm-img" />
                    <h3>Paytm</h3>
                    <Link to="/payment-paytm">
                      <button className="btn text-white hero-btn">
                        Pay Now
                      </button>
                    </Link>
                  </div>
                </Col>
                <Col lg={6} md={12}>
                  <div className="service-h-card">
                    <img src={bankImg} alt="bank-img" />
                    <h3>Bank Transfer</h3>
                    <Link to="/payment-bank">
                      <button className="btn text-white hero-btn">
                        Pay Now
                      </button>
                    </Link>
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

export default payment
