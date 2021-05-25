import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import img from "../../assets/images/payments.svg"
import HeroImg from "../../components/HeroImg"
import { Col, Container, Row } from "react-bootstrap"
import paytmImg from "../../assets/images/paytm.png"
import bankImg from "../../assets/images/bank-transfer.png"
import { Link } from "gatsby"

const payment = () => {
  return (
    <Layout>
      <Seo Sitetitle="Payment" />
      <Container>
        <HeroImg
          title="Payment Options"
          description="Pay for our services online using paytm or bank transfer and leave the hassle of carrying money."
          path={img}
          id="#payment"
        />
        <div className="more-info my-5" id="payment">
          <Row>
            <Col lg={6} md={12}>
              <div className="service-h-card">
                <img src={paytmImg} alt="paytm-img" />
                <h3>Paytm</h3>
                <Link to="/payment-paytm">
                  <button className="btn text-white hero-btn">Pay Now</button>
                </Link>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="service-h-card">
                <img src={bankImg} alt="bank-img" />
                <h3>Bank Transfer</h3>
                <Link to="/payment-bank">
                  <button className="btn text-white hero-btn">Pay Now</button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  )
}

export default payment
