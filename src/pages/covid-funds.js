import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import qrCode from "../assets/images/qr-code.jpg"
import gpay from "../assets/images/g-pay.png"
import paytm from "../assets/images/paytmupi.png"
import phonepay from "../assets/images/phonepay.png"

const covidFunds = () => {
  return (
    <Layout>
      <Seo Sitetitle="Covid ICU-Fund raiser" />
      <Container className="covid-help">
        <h2 className="mt-4 text-center">COVID ICU fund raiser</h2>
        <div className="underline"></div>
        <p className="my-4 w-75 text-center mx-auto">
          Donation are accepted for supporting COVID ICU treatment. This is
          completely managed by “Nischidha Imaging Sevices Private Limited” and
          selfless doctors in and around Bengaluru.
        </p>
        <Row className="justify-content-center align-items-center">
          <Col lg={6} md={12} className="my-3">
            <img src={qrCode} alt="qr-code" className="qr-img" />
          </Col>
          <Col lg={6} md={12}>
            <div className="bank-det my-3">
              <p>
                {" "}
                <strong>Bank details : </strong>Account name: Nischidha Imaging
                Services Pvt Ltd
              </p>
              <p>
                <strong> Account No : </strong>50200028932540
              </p>
              <p>
                <strong>IFSC : </strong>HDFC0000184
              </p>
              <p>
                <strong>Bank and Branch : </strong> HDFCBank, Indiranagar CMH
                road, Bangalore
              </p>
            </div>

            <p className="my-4">
              The QR Code can be scanned using any UPI supported apps or click
              on the preferred apps below to donate.
            </p>

            <div className="sup-apps d-flex justify-content-start align-items-center">
              <a href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Thank you for choosing to raise funds for covid ICU&cu=INR">
                <img src={gpay} alt="gpay-logo" />
              </a>
              <a href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Thank you for choosing to raise funds for covid ICU&cu=INR">
                <img src={phonepay} alt="phonepay-logo" />
              </a>
              <a href="upi://pay?pa=dhananjayakvn@okhdfcbank&pn=Dhananjaya K V N&tn=Thank you for choosing to raise funds for covid ICU&cu=INR">
                <img src={paytm} alt="paytm-logo" />
              </a>
            </div>
            <div className="details">
              <p>UPI NAME : Dhananjaya K V N</p>
              <p className="upi-id">UPI ID: dhananjayakvn@okhdfcbank</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default covidFunds
